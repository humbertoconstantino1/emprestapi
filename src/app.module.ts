import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { LoanModule } from './loan/loan.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // ajuste conforme seu DB
      password: 'admin', // ajuste conforme seu DB
      database: 'loan_db', // ajuste conforme seu DB
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // só para dev, cria tabelas automaticamente
    }),
    UserModule,
    LoanModule,
    AuthModule,
  ],
})
export class AppModule {}
