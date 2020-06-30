import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/winston.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from './config/mailer.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    WinstonModule.forRoot(winstonConfig),
    MailerModule.forRoot(mailerConfig),
    UsersModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
  ],
})
export class AppModule {}
