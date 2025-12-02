import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './loan.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private repo: Repository<Loan>,
    private userService: UserService,
  ) {}

  async create(userId: number, loanData: Partial<Loan>) {
    // Busca o usuário
    const user: User | null = await this.userService.findOne(userId);
    if (!user) {
      throw new NotFoundException(`Usuário com id ${userId} não encontrado`);
    }

    // Cria o empréstimo vinculando o usuário
    const loan = this.repo.create({ ...loanData, user });
    return this.repo.save(loan);
  }

  findAll() {
    return this.repo.find({ relations: ['user'] });
  }

  findByUser(userId: number) {
    return this.repo.find({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  }
}
