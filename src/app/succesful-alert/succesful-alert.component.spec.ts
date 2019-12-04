import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfulAlertComponent } from './succesful-alert.component';

describe('SuccesfulAlertComponent', () => {
  let component: SuccesfulAlertComponent;
  let fixture: ComponentFixture<SuccesfulAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesfulAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfulAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
