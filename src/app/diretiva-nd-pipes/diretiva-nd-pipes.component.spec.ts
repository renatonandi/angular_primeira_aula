import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNdPipesComponent } from './diretiva-nd-pipes.component';

describe('DiretivaNdPipesComponent', () => {
  let component: DiretivaNdPipesComponent;
  let fixture: ComponentFixture<DiretivaNdPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaNdPipesComponent]
    });
    fixture = TestBed.createComponent(DiretivaNdPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
