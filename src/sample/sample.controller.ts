import { Controller, Get, Body, Param, Post, Delete, Patch, Put } from '@nestjs/common';

import { SampleService } from './sample.service';
import { Sample } from './../Entities/Sample.entity';

@Controller('sample')
export class SampleController {
  constructor (
      private readonly SampleService : SampleService
      ){}
  @Get()
  findAllSamples(): Promise<Sample[]> {
    return this.SampleService.findAll()
  }
  @Get(':id')
  findOneSample(@Param('id') id) {
    console.log("Controller param :" ,id );
    return this.SampleService.findAOneS(id);
  }
  /*
  @Get()
  findOneSample(@Body() body: any): Promise<Sample> {
    console.log("Controller Body :" ,body );
    if(obj){return this.SampleService.findByobj(body)}
  }
  */
  @Post()
  async insertSample(@Body() sample: Sample) {
    console.log("Post Controller" ,sample);
    return await this.SampleService.insert(sample);
  }
  @Delete(':id/delete')
  async deleteSample(@Param('id') id) {
    console.log("Delete Controller" ,id);
    return await this.SampleService.deleteOne(id);
  }
  /*
  @Patch(':id/patch')
  async updateSample(@Param('id') id, @Body() sample: Sample): Promise<any> {
    console.log("Patch Controller" ,sample);
    console.log("Patch Controller" ,id);
    return await this.SampleService.UpdateOne( id, sample );
  }*/
  @Put(':id/put')
  async update(@Param('id') id, @Body() sample: Sample): Promise<any> {
    console.log('Put Controller :' ,id)
    console.log("Put Controller" ,sample);
    return await this.SampleService.UpdateOne( id, sample );
  }  
}