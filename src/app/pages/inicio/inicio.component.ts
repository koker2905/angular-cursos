import { Component,ViewChild,OnInit } from '@angular/core';
import { DadoComponent } from '../../components/dado/dado.component';

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

}
