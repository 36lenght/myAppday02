import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc09',
  templateUrl: './myc09.component.html',
  styleUrls: ['./myc09.component.css'],
})
export class Myc09Component implements OnInit {
  num = 0;
  jian() {
    this.num--;
  }
  // 构造方法：本质上不属于组件的生命周期。是面向对象的类初始化时必然会触发的方法
  constructor() {}

  ngOnInit(): void {
    // 生命周期：组件开始初始化内容，相当于 vue 的 mounted 方法、
    console.log('ngOnInit:组件开始初始化内容');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit：组件的数据初始化完毕时');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit:组件的UI初始化完毕');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked：组件的数据发生变更');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked:组件的UI发生变更');
  }
  ngOnDestroy(): void {
    // 生命周期：组件销毁时
    console.log('ngOnDestroy:组件销毁时');
  }
}
