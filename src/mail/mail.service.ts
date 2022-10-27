import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private logger: Logger = new Logger('MailService');

  async sendMail(str: string) {
    this.logger.log(`Mail Sent, ${str}`);
  }
}
