import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, args: string): string {
    if(args === 'M') {
      return 'Mr. ' + value;
    }else if(args === 'F') {
      return 'Ms. ' + value;
    }else return value;
  }

}
