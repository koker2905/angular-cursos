import { Component, OnInit } from '@angular/core';
import { CursoService } from '/Users/xavi2/demo65/src/app/curso.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  standalone: true,
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  imports: [CommonModule]
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.cursos = this.cursoService.obtenerCursos();
  }

  eliminarCurso(nombre: string) {
    this.cursoService.eliminarCurso(nombre);
    this.cargarCursos();  // Actualiza la lista después de eliminar
  }

  mostrarDetalles(curso: any) {
    curso.mostrarDetalles = !curso.mostrarDetalles;  // Alterna los detalles
  }
}
