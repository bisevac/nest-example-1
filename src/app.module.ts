import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'TESTDB',
      retryAttempts: 60,
      retryDelay: 5000,
      poolSize: 5,
      entities: [UserEntity],
      synchronize: false,
    }),
    UserModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
