import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingdataComponent } from './bindingdata.component';

describe('BindingdataComponent', () => {
  let component: BindingdataComponent;
  let fixture: ComponentFixture<BindingdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingdataComponent]
    });
    fixture = TestBed.createComponent(BindingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
