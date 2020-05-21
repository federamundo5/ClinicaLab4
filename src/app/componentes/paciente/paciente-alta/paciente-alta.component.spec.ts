import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAltaComponent } from './paciente-alta.component';

describe('PacienteAltaComponent', () => {
  let component: PacienteAltaComponent;
  let fixture: ComponentFixture<PacienteAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
