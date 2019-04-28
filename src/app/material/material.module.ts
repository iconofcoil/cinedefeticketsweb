import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatListModule, MatSortModule,
         MatTableModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
