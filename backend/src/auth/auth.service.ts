import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { SignupDto } from './dto/signup.dto';
import { VerifyDto } from './dto/verify.dto';
import * as bcrypt from 'bcryptjs';
import { MailService } from './mail.service';
import { JwtService } from '@nestjs/jwt';

interface LoginDto {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly mailService: MailService,
    private readonly jwtService: JwtService,
  ) {}

  private generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
  }

  async signup(dto: SignupDto) {
    const existing = await this.userModel.findOne({ email: dto.email }).exec();
    if (existing) {
      throw new BadRequestException('This user already exists. Please sign in instead.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(dto.password, salt);

    const user = await this.userModel.create({
      email: dto.email,
      password: hashed,
      name: dto.name,
      isActive: true,
      isVerified: true, // Skip verification - activate immediately
    });

    return { message: 'Signup successful! You can now sign in.', user: { email: user.email, name: user.name } };
  }

  async verify(dto: VerifyDto) {
    const user = await this.userModel.findOne({ email: dto.email }).exec();
    if (!user) throw new NotFoundException('User not found');
    if (user.isVerified) return { message: 'Account already verified' };
    if (!user.verificationCode || !user.verificationExpires)
      throw new BadRequestException('No verification requested');

    if (user.verificationExpires.getTime() < Date.now())
      throw new BadRequestException('Verification code expired');

    if (user.verificationCode !== dto.code)
      throw new BadRequestException('Invalid verification code');

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationExpires = undefined;
    await user.save();
    return { message: 'Account verified successfully' };
  }

  async login(dto: LoginDto) {
    const user = await this.userModel.findOne({ email: dto.email }).exec();
    if (!user) {
      throw new UnauthorizedException('User not registered. Please sign up first.');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password. Please try again.');
    }

    if (!user.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    const payload = { email: user.email, sub: user._id, name: user.name };
    const token = this.jwtService.sign(payload);

    return {
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    };
  }
}