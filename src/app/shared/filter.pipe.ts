import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  filterTable = ["DARK", "AMBER", "CLEAR"]

  transform(items: any[], filter: string | null): any {
    if(!items || !filter || !this.filterTable.includes(filter)) {
      return items;
    }
    return items.filter(item => item.type === filter);
  }

}
