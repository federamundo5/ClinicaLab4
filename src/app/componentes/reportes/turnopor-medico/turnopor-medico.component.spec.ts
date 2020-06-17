import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoporMedicoComponent } from './turnopor-medico.component';

describe('TurnoporMedicoComponent', () => {
  let component: TurnoporMedicoComponent;
  let fixture: ComponentFixture<TurnoporMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoporMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoporMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
