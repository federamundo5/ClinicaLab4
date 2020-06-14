import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaUsuarioComponent } from './encuesta-usuario.component';

describe('EncuestaUsuarioComponent', () => {
  let component: EncuestaUsuarioComponent;
  let fixture: ComponentFixture<EncuestaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
