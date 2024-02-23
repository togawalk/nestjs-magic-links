import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const setupSwagger = (app: INestApplication, path = 'api') => {
  const DocumentBuilderConfig = new DocumentBuilder()
    .setTitle('')
    .setDescription('')
    .setVersion('1.0')
    .addTag('auth')
    .addBearerAuth()
    .build();

  const swaggerDocument = SwaggerModule.createDocument(
    app,
    DocumentBuilderConfig,
  );
  SwaggerModule.setup(path, app, swaggerDocument);
};
