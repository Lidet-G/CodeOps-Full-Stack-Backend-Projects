import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishes: DishesService) {}

  @Get()
  findAll(@Query('restaurantId', new ParseIntPipe({ optional: true })) restaurantId?: number) {
    return this.dishes.findAll(restaurantId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dishes.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateDishDto) {
    return this.dishes.create(dto);
  }
}
