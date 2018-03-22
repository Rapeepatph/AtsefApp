import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightProfileModalComponent } from './flight-profile-modal.component';

describe('FlightProfileModalComponent', () => {
  let component: FlightProfileModalComponent;
  let fixture: ComponentFixture<FlightProfileModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightProfileModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
