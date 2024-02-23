import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcomeMessage(user: { name: string; id: number }) {
    return `You're in, ${user.name}`;
  }
}
