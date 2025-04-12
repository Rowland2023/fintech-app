// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transaction } from '../transaction/transaction.entity'; // Import the Transaction entity

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ default: 0 })
  balance: number;

  // This is the new property for the inverse side of the relationship
  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[]; // Or Promise<Transaction[]> if lazy loading
}