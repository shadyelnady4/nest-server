import { Injectable } from '@nestjs/common';
import { NewPatientInput } from './dto/new-patient.input';
import { PatientsArgs } from './dto/patient.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './../models/Patient';
import { Repository, DeleteResult, UpdateResult , InsertResult } from 'typeorm';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private readonly sampleRepo : Repository<Patient>
  ){}
  
  async create(data: NewPatientInput): Promise<InsertResult>{
    console.log("Insert Services :" ,data);
    return await this.sampleRepo.insert(data);
  }

  async findOneById(id: string): Promise<Patient> {
    console.log("Patient Services findOneById param :", id );
    return await this.sampleRepo.findOne({id});
  }

  async findAll(patientsArgs: PatientsArgs): Promise<Patient[]> {
    console.log("Patient Services findOneAll param :", patientsArgs );
    return await this.sampleRepo.find();
  }
  async UpdateOne(id: string, patientsData: NewPatientInput ): Promise<UpdateResult> {
    return await this.sampleRepo.update(id, patientsData);
  }

  async removeOne(id: string): Promise<DeleteResult> {
    console.log("Delete Services :" , id);
    return await this.sampleRepo.delete({id});
  }
}
