import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoSolicitadoComponent } from './turno-solicitado.component';

describe('TurnoSolicitadoComponent', () => {
  let component: TurnoSolicitadoComponent;
  let fixture: ComponentFixture<TurnoSolicitadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoSolicitadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoSolicitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
