import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [UserService],
})
export class UserModule {}
