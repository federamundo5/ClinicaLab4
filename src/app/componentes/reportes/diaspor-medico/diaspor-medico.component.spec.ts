import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasporMedicoComponent } from './diaspor-medico.component';

describe('DiasporMedicoComponent', () => {
  let component: DiasporMedicoComponent;
  let fixture: ComponentFixture<DiasporMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasporMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasporMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
