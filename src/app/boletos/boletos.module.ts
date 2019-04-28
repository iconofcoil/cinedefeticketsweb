import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadesListComponent } from './ciudades-list/ciudades-list.component';
import { BoletosRoutingModule } from './boletos-routing/boletos-routing.module';
import { MaterialModule } from './../material/material.module';
import { SucursalListComponent } from './sucursal-list/sucursal-list.component';
import { FuncionListComponent } from './funcion-list/funcion-list.component';
import { FuncionFechaListComponent } from './funcionfecha-list/funcionfecha-list.component';
import { FuncionHorarioListComponent } from './funcionhorario-list/funcionhorario-list.component';
import { FuncionasientosListComponent } from './funcionasientos-list/funcionasientos-list.component';

@NgModule({
  declarations: [CiudadesListComponent, SucursalListComponent,
                 FuncionListComponent, FuncionFechaListComponent, FuncionHorarioListComponent, FuncionasientosListComponent],
  imports: [
    CommonModule,
    BoletosRoutingModule,
    MaterialModule
  ]
})
export class BoletosModule { }
