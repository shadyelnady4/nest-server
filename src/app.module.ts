import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './sample/sample.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      database: "Lab",
      port: 27017,
      //password: "",
      //user: "",
      //authSource: "",
      useNewUrlParser: true,
      //enableGeoIndexing: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
      entities:[join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useUnifiedTopology: true,
      promiseLibrary: global.Promise
    }),
    GraphQLModule.forRoot({
      debug: false,
      playground: true,          //graphical, interactive, in-browser http://localhost:3000/graphql
      //include: [PatientsModule],    //serve multiple endpoints at once
      autoSchemaFile: 'schema.gql',
      //typePaths: ['./**/*.graphql'],
      //installSubscriptionHandlers: true,
    }),
    SampleModule,
    PatientsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}