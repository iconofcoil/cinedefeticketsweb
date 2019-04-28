import { Funcion } from './../../_interface/funcion.model';
import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionHorario } from '../../_interface/funcionhorario.model';
import * as moment from 'moment';

@Component({
  selector: 'app-funcionfecha-list',
  templateUrl: './funcionfecha-list.component.html',
  styleUrls: ['./funcionfecha-list.component.css']
})

export class FuncionFechaListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [ 'horario' ];
  public dataSource = new MatTableDataSource<FuncionHorario>();
  public selectedHorario: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private repoService: RepositoryService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getHorariosByFuncionId();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public highlightRow(horario) {
    this.selectedHorario = horario;
  }

  public getHorariosByFuncionId = () => {
    const funcionId = this.activeRoute.snapshot.params['id'];

    this.repoService.getData(`api/v1.0/funciones/${funcionId}/horarios/fechas`)
    .subscribe(res => {
      this.dataSource.data = res as FuncionHorario[];
    });
  }

  public redirectToSelect = (id, horario) => {
    const fecha = moment(horario).format('YYYY-MM-DD');
    const url = `/boletos/funcion/${id}/fecha/${fecha}`;
    this.router.navigate([url]);
  }

}


