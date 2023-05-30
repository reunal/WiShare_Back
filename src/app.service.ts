import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //* api test 용입니다.
  test(): string {
    return 'ok';
  }
}
