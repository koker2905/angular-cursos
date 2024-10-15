import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit {

  valor = 0;
  mensaje = '';
  @Input() color:string = ''

  ngOnInit(): void {
    this.lanzar()
  }


  lanzar(){
    this.valor= Math.trunc(Math.random()*6)+1
  }

 

}
