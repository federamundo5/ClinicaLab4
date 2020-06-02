import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalesPendientesComponent } from './profesionales-pendientes.component';

describe('ProfesionalesPendientesComponent', () => {
  let component: ProfesionalesPendientesComponent;
  let fixture: ComponentFixture<ProfesionalesPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalesPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
