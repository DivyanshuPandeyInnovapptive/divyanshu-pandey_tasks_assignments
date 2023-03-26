import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLocaleDateFormat',
})
export class GetLocaleDateFormatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return new Date(value).toDateString();
  }
}
