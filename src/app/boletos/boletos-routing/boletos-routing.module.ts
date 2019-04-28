import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CiudadesListComponent } from '../ciudades-list/ciudades-list.component';
import { SucursalListComponent } from '../sucursal-list/sucursal-list.component';
import { FuncionListComponent } from '../funcion-list/funcion-list.component';
import { FuncionFechaListComponent } from '../funcionfecha-list/funcionfecha-list.component';
import { FuncionHorarioListComponent } from '../funcionhorario-list/funcionhorario-list.component';

const routes: Routes = [
  { path: 'ciudades', component: CiudadesListComponent },
  { path: 'sucursales/:nombre', component: SucursalListComponent},
  { path: 'funciones/:id', component: FuncionListComponent},
  { path: 'funcionfechas/:id', component: FuncionFechaListComponent},
  { path: 'funcion/:id/fecha/:fecha', component: FuncionHorarioListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class BoletosRoutingModule { }
