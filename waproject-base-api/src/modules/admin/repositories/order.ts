import { Injectable } from '@nestjs/common';
import { Order } from 'modules/database/models/order';
import { IOrder } from 'modules/database/interfaces/order';
import { Transaction } from 'objection';

@Injectable()
export class OrderRepository {
  public async list(transaction?: Transaction): Promise<Order[]> {
    return Order.query(transaction).select('*');
  }

  public async insert(model: IOrder, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction).insert(model);
  }
}
