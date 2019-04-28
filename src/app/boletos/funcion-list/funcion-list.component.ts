import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Funcion } from '../../_interface/funcion.model';

@Component({
  selector: 'app-funcion-list',
  templateUrl: './funcion-list.component.html',
  styleUrls: ['./funcion-list.component.css']
})

export class FuncionListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [ 'peliculaTitulo' ];
  public dataSource = new MatTableDataSource<Funcion>();

  public selectedId: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private repoService: RepositoryService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getFuncionesBySucursalId();
    this.convertPostersToImages();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public highlightRow(id) {
    this.selectedId = id;
  }

  private convertPostersToImages() {
    this.dataSource.data.forEach(element => this.convertPoster(element));
  }

  public convertPoster(funcion: Funcion) {
    let binary = '';
    const bytes = new Uint8Array( funcion.peliculaPoster );
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }

    const base64String = btoa(binary);
    funcion.image = 'data:image/jpeg;base64,' + base64String;
    console.log(funcion.image);
  }

  public getFuncionesBySucursalId = () => {
    const sucursalId = this.activeRoute.snapshot.params['id'];

    this.repoService.getData(`api/v1.0/funciones/sucursal/${sucursalId}`)
    .subscribe(res => {
      this.dataSource.data = res as Funcion[];
    });
  }

  public redirectToSelect = (id: string) => {
    const url = `/boletos/funcionfechas/${id}`;
    this.router.navigate([url]);
  }

}
