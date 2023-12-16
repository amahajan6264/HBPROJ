import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bindingdata1Component } from './bindingdata1.component';

describe('Bindingdata1Component', () => {
  let component: Bindingdata1Component;
  let fixture: ComponentFixture<Bindingdata1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bindingdata1Component]
    });
    fixture = TestBed.createComponent(Bindingdata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
