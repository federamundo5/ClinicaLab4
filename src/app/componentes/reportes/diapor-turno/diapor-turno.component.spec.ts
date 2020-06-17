import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaporTurnoComponent } from './diapor-turno.component';

describe('DiaporTurnoComponent', () => {
  let component: DiaporTurnoComponent;
  let fixture: ComponentFixture<DiaporTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaporTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaporTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
