import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateType'
})
export class TranslateTypePipe implements PipeTransform {
  transform(type: string): string {
    switch (type) {
      case 'CLEAR':
        return 'Claire';
      case 'AMBER':
        return 'Ambré';
      case 'DARK':
        return 'Foncé';
      default:
        return type;
    }
  }
}
