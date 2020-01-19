import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFastifyApplication , FastifyAdapter } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({logger: true})
  );
  
  const options = new DocumentBuilder()
    .setTitle('Lab System')
    .setDescription('The Lab System API ')
    .setVersion('1.0')
    .addTag('Lab')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000 , ()=>{
    console.log("server listen on 3000")
  });
}
bootstrap();