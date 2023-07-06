import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNdMicrowaveComponent } from './diretiva-nd-microwave.component';

describe('DiretivaNdMicrowaveComponent', () => {
  let component: DiretivaNdMicrowaveComponent;
  let fixture: ComponentFixture<DiretivaNdMicrowaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNdMicrowaveComponent]
    });
    fixture = TestBed.createComponent(DiretivaNdMicrowaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
