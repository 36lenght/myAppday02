import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc09Component } from './myc09.component';

describe('Myc09Component', () => {
  let component: Myc09Component;
  let fixture: ComponentFixture<Myc09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
