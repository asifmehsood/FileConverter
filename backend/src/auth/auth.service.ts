import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { SignupDto } from './dto/signup.dto';
import { VerifyDto } from './dto/verify.dto';
import * as bcrypt from 'bcryptjs';
import { MailService } from './mail.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly mailService: MailService,
  ) {}

  private generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
  }

  async signup(dto: SignupDto) {
    const existing = await this.userModel.findOne({ email: dto.email }).exec();
    if (existing) {
      throw new BadRequestException('Email already registered');
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(dto.password, salt);

    const code = this.generateVerificationCode();
    const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 min

    const user = await this.userModel.create({
      email: dto.email,
      password: hashed,
      name: dto.name,
      isActive: true,
      isVerified: false,
      verificationCode: code,
      verificationExpires: expires,
    });

    await this.mailService.sendVerificationEmail(user.email, code);
    return { message: 'Signup successful, verification code sent to email.' };
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
}