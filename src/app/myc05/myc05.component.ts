import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc05',
  templateUrl: './myc05.component.html',
  styleUrls: ['./myc05.component.css'],
})
export class Myc05Component implements OnInit {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  cur = 0;
  constructor() {}

  ngOnInit(): void {}
}
