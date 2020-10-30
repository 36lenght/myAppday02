import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abs',
})
export class AbsPipe implements PipeTransform {
  transform(value): unknown {
    if (value > 0) {
      return value * 1;
    } else {
      return value * -1;
    }
  }
}
