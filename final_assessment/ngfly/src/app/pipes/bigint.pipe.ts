import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigint',
})
export class BigintPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): bigint {
    return BigInt(value);
  }
}
