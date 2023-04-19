import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { 
    cors: true
  });
  
  // app.enableCors({
	// 	origin: `${process.env.FRONTEND_URL}`,
    
	// 	methods: ["GET", "POST"],
	// 	// credentials: true,
	// });
  
  await app.listen(3000);
}
bootstrap();
