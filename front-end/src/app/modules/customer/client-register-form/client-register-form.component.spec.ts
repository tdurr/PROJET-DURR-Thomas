import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegisterFormComponent } from './client-register-form.component';

describe('FormClientAccountComponent', () => {
  let component: ClientRegisterFormComponent;
  let fixture: ComponentFixture<ClientRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
