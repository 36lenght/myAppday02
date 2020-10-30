import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]',
})
export class GreenDirective {
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.style.color = 'green';
  }
}
