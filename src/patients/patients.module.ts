import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsResolver } from './patients.resolver';
import { DateScalar } from './../common/scalars/date.scalar';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from 'src/models/Patient';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  providers: [PatientsService, PatientsResolver, DateScalar],
  exports: [TypeOrmModule]
})
export class PatientsModule {}