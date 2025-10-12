import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  // In production, integrate real SMTP provider (e.g., Nodemailer, SendGrid)
  async sendVerificationEmail(email: string, code: string): Promise<void> {
    this.logger.log(`Sending verification code ${code} to ${email}`);
  }
}
