import {RouterModule, Routes} from '@angular/router';

import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { SemillasComponent } from './components/semillas/semillas.component';
import { SilosComponent } from './components/silos/silos.component';
import { HomeComponent } from './components/home/home.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { LimpiezaComponent } from './components/limpieza/limpieza.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'semillas', component: SemillasComponent},
    {path: 'silos', component: SilosComponent},
    {path: 'proveedores', component: ProveedoresComponent},
    {path: 'entradas', component: EntradasComponent},
    {path: 'limpieza', component: LimpiezaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
