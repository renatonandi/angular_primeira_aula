import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNdIfComponent } from './diretiva-nd-if.component';

describe('DiretivaNdIfComponent', () => {
  let component: DiretivaNdIfComponent;
  let fixture: ComponentFixture<DiretivaNdIfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNdIfComponent]
    });
    fixture = TestBed.createComponent(DiretivaNdIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
