import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CursosComponent } from './pages/cursos/cursos.component';


export const routes: Routes = [

    {
        path: 'pages/acerca-de',
        component: AcercaDeComponent
    },

    {
        path: 'pages/inicio',
        component: InicioComponent
    },

    {
        path: '',
        component: InicioComponent
    },

    {
        path: 'pages/cursos',
        component: CursosComponent
    },



];
