import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { DebtsModule } from './debts/debts.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    UsersModule,
    AuthModule,
    CategoriesModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
    DebtsModule,
    AssetsModule,
    // other modules
  ],
})
export class AppModule {}
