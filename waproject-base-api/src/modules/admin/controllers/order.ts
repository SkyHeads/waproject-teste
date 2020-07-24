import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
// import { AuthRequired } from 'modules/common/guards/token';

import { IOrder } from '../../database/interfaces/order';
import { Order } from 'modules/database/models/order';
import { OrderRepository } from '../repositories/order';
import { OrderService } from '../services/order';

@ApiTags('Admin: Order')
@Controller('/order')
// @AuthRequired()
export class OrderController {
  // constructor(private orderRepository: OrderRepository, private orderService: OrderService) {}
  constructor(private orderService: OrderService, private orderRepository: OrderRepository) {}

  @Get()
  @ApiResponse({ status: 200, type: [Order] })
  public async list() {
    return this.orderRepository.list();
  }

  @Post()
  @ApiResponse({ status: 200, type: Order })
  public async createOrder(@Body() model: IOrder) {
    return this.orderService.create(model);
  }
}
