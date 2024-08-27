import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const logger = morgan(':method :url :status :response-time ms ');
    logger(req, res, (err) => {
      if (err) return next(err);
      next();
    });
    
    
    
  }
  
}
