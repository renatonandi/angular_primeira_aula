import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNdSwitchComponent } from './diretiva-nd-switch.component';

describe('DiretivaNdSwitchComponent', () => {
  let component: DiretivaNdSwitchComponent;
  let fixture: ComponentFixture<DiretivaNdSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNdSwitchComponent]
    });
    fixture = TestBed.createComponent(DiretivaNdSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
