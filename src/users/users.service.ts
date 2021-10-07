import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async join(email: string, nickname: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('이미 존재하는 사용자입니다.', 401);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });
  }
}
