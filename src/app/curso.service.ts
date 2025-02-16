import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.inicializarCursos(); // Inicializa los cursos al crear el servicio
  }

  obtenerCursos() {
    if (isPlatformBrowser(this.platformId)) { // Verifica si está en el navegador
      try {
        const cursos = localStorage.getItem('cursos');
        return cursos ? JSON.parse(cursos) : [];
      } catch (error) {
        console.error('Error al obtener cursos de localStorage:', error);
        return []; // Devuelve un array vacío si ocurre un error
      }
    }
    return []; // Devuelve un array vacío si no está en el navegador
  }
  
  agregarCurso(curso: any) {
    if (isPlatformBrowser(this.platformId)) { // Verifica si está en el navegador
      try {
        const cursos = this.obtenerCursos();
        cursos.push(curso);
        localStorage.setItem('cursos', JSON.stringify(cursos));
      } catch (error) {
        console.error('Error al agregar curso a localStorage:', error);
      }
    }
  }
  
  eliminarCurso(nombre: string) {
    if (isPlatformBrowser(this.platformId)) { // Verifica si está en el navegador
      try {
        let cursos = this.obtenerCursos();
        cursos = cursos.filter((curso: any) => curso.nombre !== nombre);
        localStorage.setItem('cursos', JSON.stringify(cursos));
      } catch (error) {
        console.error('Error al eliminar curso de localStorage:', error);
      }
    }
  }
  
  inicializarCursos() {
    if (isPlatformBrowser(this.platformId)) { // Verifica si está en el navegador
      try {
        if (this.obtenerCursos().length === 0) { // Si no hay cursos, inicializa
          const cursosIniciales = [
            { nombre: "Matemáticas", instructor: "Juan Pérez", fecha: "2024-10-01", duracion: "40", descripcion: "Curso de matemáticas básicas y avanzadas.", mostrarDetalles: true },
            { nombre: "Inglés", instructor: "María López", fecha: "2024-10-15", duracion: "30", descripcion: "Curso de inglés para principiantes.", mostrarDetalles: true  },
          
          ];
          localStorage.setItem('cursos', JSON.stringify(cursosIniciales)); // Almacena los cursos iniciales en localStorage
        }
      } catch (error) {
        console.error('Error al inicializar cursos en localStorage:', error);
      }
    }
  }
}
