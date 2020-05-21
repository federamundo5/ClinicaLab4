import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalAltaComponent } from './profesional-alta.component';

describe('ProfesionalAltaComponent', () => {
  let component: ProfesionalAltaComponent;
  let fixture: ComponentFixture<ProfesionalAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
