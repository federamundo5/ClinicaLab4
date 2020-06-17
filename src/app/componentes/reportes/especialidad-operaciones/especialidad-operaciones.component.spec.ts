import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadOperacionesComponent } from './especialidad-operaciones.component';

describe('EspecialidadOperacionesComponent', () => {
  let component: EspecialidadOperacionesComponent;
  let fixture: ComponentFixture<EspecialidadOperacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadOperacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
