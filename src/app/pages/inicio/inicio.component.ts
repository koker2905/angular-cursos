import { Component,ViewChild,OnInit } from '@angular/core';
import { DadoComponent } from '../../components/dado/dado.component';
import { GestionPerrosService } from '../../services/gestion-perros.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [DadoComponent, FormsModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
  title = 'demo65'; 
  name = 'Kevin Yansa';
  edad = 23;
  sueldos = [900,900,756];
  salario = 5000;
  contador = 0;
 

  a = 0;
  b = 0;
  c = 0;

  codigo: number = 0;
  decripcion: string = '';
  result: string = '';
  precio: number = 0;
  indexSeleccionado: number | null = null;
  articulos: any[] = [];

  perros:any


  

  constructor(private perrosService : GestionPerrosService){
    this.cargarArticulos();
  }

  ngOnInit():void{
    
    this.perrosService.addPerros('Nect','Beagle')
    this.perrosService.addPerros('Sam','Koker')
    this.perros = this.perrosService.getPerros()
  }

  

  cargarArticulos() {
    if (typeof window !== 'undefined' && localStorage) {
      const datosGuardados = localStorage.getItem('articulos');
      if (datosGuardados) {
        this.articulos = JSON.parse(datosGuardados);
      } else {
        // Datos predeterminados
        this.articulos = [
          { codigo: 1, decripcion: "Tv", precio: 540 },
          { codigo: 2, decripcion: "Microondas", precio: 140 },
          { codigo: 3, decripcion: "Licuadora", precio: 40 }
        ];
        // Almacenamos los datos predeterminados en localStorage
        this.guardarEnLocalStorage();
      }
    }
  }

  guardarEnLocalStorage() {
    localStorage.setItem('articulos', JSON.stringify(this.articulos));
  }

  guardar() {
    if (this.indexSeleccionado === null) {
      // Agregar nuevo artículo
      if (this.codigo && this.decripcion && this.precio) {
        this.articulos.push({
          codigo: this.codigo,
          decripcion: this.decripcion,
          precio: this.precio
        });
      }
    } else {
      // Actualizar el artículo seleccionado
      this.articulos[this.indexSeleccionado] = {
        codigo: this.codigo,
        decripcion: this.decripcion,
        precio: this.precio
      };
      this.indexSeleccionado = null;
    }

    // Guardar en localStorage después de agregar o actualizar
    this.guardarEnLocalStorage();
    this.limpiarFormulario();
  }

  seleccionar(articulo: any, index: number) {
    this.codigo = articulo.codigo;
    this.decripcion = articulo.decripcion;
    this.precio = articulo.precio;
    this.indexSeleccionado = index;
  }

  borrar(index: number) {
    this.articulos.splice(index, 1);
    this.guardarEnLocalStorage();
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.codigo = 0;
    this.decripcion = '';
    this.precio = 0;
  }

  esMayorDeEdad() {
    return this.edad >= 18 ? ' Es mayor de edad' : ' Es menor de edad';
  }

  incrementar() {
    this.contador++;
  }

  sumar() {
    this.c = this.a + this.b;
  }

  @ViewChild('dado1') dado1!: DadoComponent
  @ViewChild('dado2') dado2!: DadoComponent
  @ViewChild('dado3') dado3!: DadoComponent

  lanzar() {
    this.dado1.lanzar();
    this.dado2.lanzar();
    this.dado3.lanzar();
    this.resultado();
  }
  
  resultado() {
    // Compara los valores de cada dado
    if (this.dado1.valor === this.dado2.valor || this.dado2.valor === this.dado3.valor || this.dado1.valor === this.dado3.valor) {
      this.result = 'GANASTE';
    } else {
      this.result = 'PERDISTE';
    }
  }


  minute = 0
  
  addMinute(isAddMinute : boolean){
    if(isAddMinute){
      this.minute++
    }
  }

  
}
