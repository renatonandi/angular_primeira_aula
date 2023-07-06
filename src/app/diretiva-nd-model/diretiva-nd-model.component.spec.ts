import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNdModelComponent } from './diretiva-nd-model.component';

describe('DiretivaNdModelComponent', () => {
  let component: DiretivaNdModelComponent;
  let fixture: ComponentFixture<DiretivaNdModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNdModelComponent]
    });
    fixture = TestBed.createComponent(DiretivaNdModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
