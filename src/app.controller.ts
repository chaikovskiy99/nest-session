import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard} from './auth/local.auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';


// api/v1/login
@Controller('api/v1')
export class AppController {


  @Get('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req): any{
    return {message: "logged in"}
  }

  
  @Get('protected')
  @UseGuards(AuthenticatedGuard)
  getProtected() : string{
    return "hello"
  }
}
