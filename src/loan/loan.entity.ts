import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('loans')
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  // Dados do cliente
  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  telefone: string;

  @Column('numeric', { nullable: true })
  valor: number;

  @Column({ type: 'date', nullable: true })
  data: string;

  @Column('numeric', { nullable: true })
  juros: number;

  @Column({ nullable: true })
  endereco: string;

  @Column({ type: 'text', nullable: true })
  observacoes: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.loans, { eager: true })
  user: User;
}
