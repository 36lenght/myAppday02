import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHidden]',
})
export class HiddenDirective {
  // 构造方法：会自动接收 <指令>，所在标签作为初始参数
  constructor(e: ElementRef) {
    console.log(e);
    e.nativeElement.hidden = true;
  }
}
