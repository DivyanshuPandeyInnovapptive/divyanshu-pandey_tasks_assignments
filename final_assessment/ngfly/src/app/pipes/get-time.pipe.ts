import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getTime',
})
export class GetTimePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let d = new Date(value);
    let x = d.getHours() + ':';
    if (d.getMinutes() < 10) x += '0';
    x += d.getMinutes();
    return x;
  }
}
