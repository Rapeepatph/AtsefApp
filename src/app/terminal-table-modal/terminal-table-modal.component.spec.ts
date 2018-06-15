import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalTableModalComponent } from './terminal-table-modal.component';

describe('TerminalTableModalComponent', () => {
  let component: TerminalTableModalComponent;
  let fixture: ComponentFixture<TerminalTableModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalTableModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
