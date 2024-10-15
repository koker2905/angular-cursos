import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCursosComponent } from './agregar-cursos.component';

describe('AgregarCursosComponent', () => {
  let component: AgregarCursosComponent;
  let fixture: ComponentFixture<AgregarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarCursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
