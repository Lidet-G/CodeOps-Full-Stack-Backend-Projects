import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import {
  DishNotFoundError,
  DuplicateRestaurantNameError,
  RestaurantNotFoundError,
} from './domain-errors';

@Catch(
  RestaurantNotFoundError,
  DishNotFoundError,
  DuplicateRestaurantNameError,
)
export class DomainErrorFilter implements ExceptionFilter {
  catch(
    error:
      | RestaurantNotFoundError
      | DishNotFoundError
      | DuplicateRestaurantNameError,
    host: ArgumentsHost,
  ) {
    const response = host.switchToHttp().getResponse<Response>();

    if (error instanceof DuplicateRestaurantNameError) {
      return response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        message: error.message,
      });
    }

    return response.status(HttpStatus.NOT_FOUND).json({
      statusCode: HttpStatus.NOT_FOUND,
      message: error.message,
    });
  }
}
