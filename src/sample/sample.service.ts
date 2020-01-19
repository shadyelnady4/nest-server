import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';


import { Sample } from './../Entities/Sample.entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample)
    private readonly sampleRepo : Repository<Sample>
  ){}

  async findAll(): Promise<Sample[]> {
    return await this.sampleRepo.find();
  }
  async findAOneS(_id: any): Promise<Sample> {
    console.log("Services param :" ,_id );
    return await this.sampleRepo.findOne({name:_id});
  }
  async insert(sample: Sample) {
    console.log("Insert Services :" ,sample);
    return await this.sampleRepo.insert(sample);
  }
  async deleteOne(_id: string): Promise<DeleteResult> {
    console.log("Delete Services :" , _id);
    return await this.sampleRepo.delete({name: _id});
  }
  async UpdateOne(id :string ,sample: Sample): Promise<UpdateResult> {
    console.log("Update Services: ",id)
    console.log("Update Services: ",sample)
    return await this.sampleRepo.update(id, sample);
  }
}
