import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class PasswordlessLoginDto {
  @ApiProperty({
    description: 'User email',
    example: 'user@test.com',
  })
  @IsEmail()
  destination: string;
}
