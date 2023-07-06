import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNdForComponent } from './diretiva-nd-for.component';

describe('DiretivaNdForComponent', () => {
  let component: DiretivaNdForComponent;
  let fixture: ComponentFixture<DiretivaNdForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNdForComponent]
    });
    fixture = TestBed.createComponent(DiretivaNdForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
