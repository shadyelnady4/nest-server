import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      database: "Lab",
      port: 27017,
      entities:[join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true
    }),
    SampleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}