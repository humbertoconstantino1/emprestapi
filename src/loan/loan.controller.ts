import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoanService } from './loan.service';
import { Loan } from './loan.entity';

@Controller('loans')
export class LoanController {
  constructor(private loanService: LoanService) {}

  @Post(':userId')
  create(@Param('userId') userId: string, @Body() body: Partial<Loan>) {
    return this.loanService.create(+userId, body);
  }

  @Get()
  findAll() {
    return this.loanService.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.loanService.findByUser(+userId);
  }
}
