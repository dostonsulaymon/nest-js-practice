import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): object {
    return { username: 'Ali', email: 'hello@hello.com' };
  }
}
