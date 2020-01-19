import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';
import { Sample } from '../Entities/Sample.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  controllers: [SampleController],
  providers: [SampleService],
  exports: [TypeOrmModule]
})
export class SampleModule {}
