import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashSync } from 'bcrypt';
import { UserEntity } from './user.entity';
import { IUser } from './user.interface';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UserService {
  private saltRound = 5;

  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private mailService: MailService,
  ) {}

  async create(userData: IUser): Promise<void> {
    userData.password = hashSync(userData.password, this.saltRound);

    await this.usersRepository.insert(userData);

    await this.mailService.sendMail(
      `email: ${userData.email}, name: ${userData.name}`,
    );
  }

  async getUser(id: number): Promise<IUser> {
    const user = await this.usersRepository.findOne({
      where: { id, isDeleted: 0 },
      select: ['id', 'name', 'email', 'phone'],
    });

    return user;
  }

  async getUsers(): Promise<IUser[]> {
    const users = await this.usersRepository.find({
      where: { isDeleted: 0 },
      select: ['id', 'name', 'email', 'phone'],
    });

    return users;
  }
}
