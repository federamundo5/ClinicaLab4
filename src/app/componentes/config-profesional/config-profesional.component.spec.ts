import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigProfesionalComponent } from './config-profesional.component';

describe('ConfigProfesionalComponent', () => {
  let component: ConfigProfesionalComponent;
  let fixture: ComponentFixture<ConfigProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
