import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Sucursal } from '../../_interface/sucursal.model';

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './sucursal-list.component.html',
  styleUrls: ['./sucursal-list.component.css']
})

export class SucursalListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [ 'nombre' ];
  public dataSource = new MatTableDataSource<Sucursal>();
  public selectedNombre: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private repoService: RepositoryService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getSucursalesByCiudad();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public highlightRow(sucursal) {
    this.selectedNombre = sucursal.nombre;
  }

  public getSucursalesByCiudad = () => {
    const nombreCiudad = this.activeRoute.snapshot.params['nombre'];

    this.repoService.getData(`api/v1.0/sucursales/${nombreCiudad}`)
    .subscribe(res => {
      this.dataSource.data = res as Sucursal[];
    });
  }

  public redirectToSelect = (id: string) => {
    const url = `/boletos/funciones/${id}`;
    this.router.navigate([url]);
  }

}

