import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { Ciudad } from '../../_interface/ciudad.model';

@Component({
  selector: 'app-ciudades-list',
  templateUrl: './ciudades-list.component.html',
  styleUrls: ['./ciudades-list.component.css']
})

export class CiudadesListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['nombre' ];
  public dataSource = new MatTableDataSource<Ciudad>();
  public selectedNombre: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private repoService: RepositoryService, private router: Router) { }

  ngOnInit() {
    this.getCiudades();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public highlightRow(ciudad) {
    this.selectedNombre = ciudad.nombre;
  }

  public getCiudades = () => {
    this.repoService.getData('api/v1.0/ciudades')
    .subscribe(res => {
      this.dataSource.data = res as Ciudad[];
    });
  }

  public redirectToSelect = (nombre: string) => {
    const url = `/boletos/sucursales/${nombre}`;
    this.router.navigate([url]);
  }

}
