import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryClientAccountComponent } from './summary-client-account.component';

describe('SummaryClientAccountComponent', () => {
  let component: SummaryClientAccountComponent;
  let fixture: ComponentFixture<SummaryClientAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryClientAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryClientAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
