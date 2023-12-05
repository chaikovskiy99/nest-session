import { Module } from '@nestjs/common';
import { PassportLocalStrategy } from './passport.local.strategy';
import { AuthService } from './auth.service';
import { UserModule } from 'src/users/user.module';
import { Serializer } from './session.serializer';


@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PassportLocalStrategy, AuthService, Serializer],
  exports: []
})
export class AuthModule {}