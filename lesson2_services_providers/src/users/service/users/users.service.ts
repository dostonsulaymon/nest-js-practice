import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'Ali1',
      email: 'hello@hdh.com',
      phone: '34432455',
    },
    {
      username: 'Ali2',
      email: 'hello@hdh.com',
      phone: '34432455',
    },
    {
      username: 'Ali3',
      email: 'hello@hdh.com',
      phone: '34432455',
    },
  ];

  getUsers(): object {
    return { username: 'Ali', email: 'hello@hello.com' };
  }

  fetchUserById(id: number) {
    return this.fakeUsers[id];
  }
}
