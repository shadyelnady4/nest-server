import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-fastify';
import { NewPatientInput } from './dto/new-patient.input';
import { PatientsArgs } from './dto/patient.args';
import { Patient } from '../models/Patient';
import { PatientsService } from './patients.service';
import { DeleteResult, UpdateResult , InsertResult } from 'typeorm';

const pubSub = new PubSub();

@Resolver(of => Patient)
export class PatientsResolver {
  constructor(private readonly patientsService: PatientsService){}
  @Query(returns => Patient)
  async patient(@Args('id') id: string): Promise<Patient>{
    const patient = await this.patientsService.findOneById(id);
    console.log("Patient Resolver Query Patient Data Parss :", id);
    if (!patient) {
      throw new NotFoundException(id);
    }
    return patient;
  }
  @Query(returns => [Patient])
  patients(@Args() patientsArgs: PatientsArgs): Promise<Patient[]>{
    console.log("Patient Resolver Query Patients Data Parss :", patientsArgs);
    return this.patientsService.findAll(patientsArgs);
  }
  @Mutation(returns => Patient)
  async addPatient(
    @Args('newPatientData') newPatientData: NewPatientInput): Promise<InsertResult> {
    const result = await this.patientsService.create(newPatientData);
    if(!result){throw new NotFoundException(newPatientData)}
    console.log("Patient Resolver Add Patient Data Parss :", newPatientData);
    console.log("Patient Resolver Add Patient Result:", result);
    pubSub.publish('patientAdded', { patientAdded: newPatientData });
    return result;
  }
  @Mutation(returns => Patient)
  async updatePatient(
    @Args('id') id: string,
    @Args('newPatientData') newPatientData: NewPatientInput
  ): Promise<UpdateResult> {
    const result = await this.patientsService.UpdateOne(id, newPatientData);
    console.log("Patient Resolver Update Patient Data Parss :", newPatientData);
    console.log("Patient Resolver Update Patient Result:", result);
    if(!result){throw new NotFoundException(newPatientData)}
    pubSub.publish('patientUpdated', { patientUpdated: newPatientData });
    return result;
  }
  @Mutation(returns => Boolean)
  async removePatient(@Args('id') id: string): Promise<DeleteResult>{
    console.log("Patient Resolver Remove Patient Data Pass:", id);
    return this.patientsService.removeOne(id);
  }
  @Subscription(returns => Patient)
  patientAdded() {
    return pubSub.asyncIterator('patientAdded');
  }
}
