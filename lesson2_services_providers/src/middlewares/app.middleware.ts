import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Hello! ');
    console.log('Hi');
    next();
  }
}
