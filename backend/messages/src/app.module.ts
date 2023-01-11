import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { devConfig } from 'db/datasource';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configOptions } from '../datasource';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // TypeOrmModule.forRoot(devConfig),
    TypeOrmModule.forRoot(configOptions),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
