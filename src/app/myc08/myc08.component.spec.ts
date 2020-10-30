import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc08Component } from './myc08.component';

describe('Myc08Component', () => {
  let component: Myc08Component;
  let fixture: ComponentFixture<Myc08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc08Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
