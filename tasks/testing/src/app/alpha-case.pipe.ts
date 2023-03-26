import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'alphaCase'
})
export class AlphaCasePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args == 'U') return value.toUpperCase();
    else if (args == 'L') return value.toLowerCase();
    else if (args == 'T') {
      var i = 0;
      var titleCase = '';
      value = value.toLowerCase();
      var temp = value.split(' ');
      for (var ele of temp) {
        ele = ele.charAt(0).toUpperCase() + ele.slice(1);
        titleCase=titleCase+' '+ele;
      }
      console.log(titleCase)
      return titleCase;
    }
    else return value;
  }
}