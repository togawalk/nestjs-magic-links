import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) { }

  validateUser(email: string) {
    const user = this.usersService.findOneByEmail(email)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user;

  }
}
