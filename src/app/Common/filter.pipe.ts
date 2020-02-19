import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersort'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter?: string, amount?: number): any {
    if((!filter && !amount) || (!filter && amount) || (filter && !amount)) return value;
    if(filter && amount){
      return  filter == 'Greater' ? 
      value.filter(item => Number(item.salary) > Number(amount)) : 
      value.filter(item => Number(item.salary) < Number(amount));
    }
  }

}
