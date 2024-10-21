import { Component } from '@angular/core';
import { CursoService } from '/Users/xavi2/demo65/src/app/curso.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-cursos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-cursos.component.html',
  styleUrl: './agregar-cursos.component.css'
})
export class AgregarCursosComponent {
  nombre: string = '';
  instructor: string = '';
  fecha: string = '';
  duracion: number = 0;
  descripcion: string = '';

  constructor(private cursoService: CursoService) {}

  agregarCurso() {
    const nuevoCurso = {
      nombre: this.nombre,
      instructor: this.instructor,
      fecha: this.fecha,
      duracion: this.duracion,
      descripcion: this.descripcion
    };

    this.cursoService.agregarCurso(nuevoCurso);

    // Limpiar el formulario después de agregar
    this.nombre = '';
    this.instructor = '';
    this.fecha = '';
    this.duracion = 0;
    this.descripcion = '';
  }
}
