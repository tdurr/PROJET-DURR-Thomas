import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientAccountComponent } from './form-client-account.component';

describe('FormClientAccountComponent', () => {
  let component: FormClientAccountComponent;
  let fixture: ComponentFixture<FormClientAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClientAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
