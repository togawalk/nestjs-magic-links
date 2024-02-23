import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Toga',
      email: 'toga@email.com',
    },
    {
      id: 2,
      name: 'Walk',
      email: 'walk@email.com',
    },
    {
      id: 3,
      name: 'User',
      email: 'user@test.com',
    },
  ];

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
