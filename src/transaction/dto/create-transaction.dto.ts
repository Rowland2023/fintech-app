import { IsNumber, IsEnum } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  amount: number;

  @IsEnum(['deposit', 'withdrawal'])
  type: 'deposit' | 'withdrawal';

  userId: number;
}
