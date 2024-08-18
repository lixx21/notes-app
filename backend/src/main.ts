import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // Create a NestJS application instance by passing the AppModule to the NestFactory
  const app = await NestFactory.create(AppModule, { cors: true });

  // Use DocumentBuilder to create a new Swagger document configuration
  const config = new DocumentBuilder()
    .setTitle('Notes API')
    .setDescription('Notes API Description')
    .setVersion('0.1') // api version
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document)
  await app.listen(3000);

}
bootstrap();
