import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { MobilePhoneDto } from './mobile-phone.dto';

@Controller()
export class AppController {
  @Get()
  @Render('form')
  getHello(): object {
    return {};
  }

  @Post()
  @Render('phone')
  setPhone(@Body() body: MobilePhoneDto): object {
    return body;
  }
}
