import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arrObjects = value; //arrays of objects to sort
    let column = args; //from this column

    return arrObjects.sort((a, b) => {
      let result = 0;
      if(a[column] > b[column]) 
        result = 1;
      else if(a[column] < b[column]) 
        result = -1;
      return result;
    });
  }

}