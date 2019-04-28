import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionHorario } from '../../_interface/funcionhorario.model';
import * as moment from 'moment';

@Component({
  selector: 'app-funcionhorario-list',
  templateUrl: './funcionhorario-list.component.html',
  styleUrls: ['./funcionhorario-list.component.css']
})

export class FuncionHorarioListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [ 'horario' ];
  public dataSource = new MatTableDataSource<FuncionHorario>();
  public selectedHorario: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private repoService: RepositoryService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getHorariosByFuncionIdFecha();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public convertHorario() {
  }

  public highlightRow(horario) {
    this.selectedHorario = horario;
  }

  public getHorariosByFuncionIdFecha = () => {
    const funcionId = this.activeRoute.snapshot.params['id'];
    const fecha = this.activeRoute.snapshot.params['fecha'];

    this.repoService.getData(`api/v1.0/funcioneshorarios/${funcionId}/fecha/${fecha}`)
    .subscribe(res => {
      this.dataSource.data = res as FuncionHorario[];
    });
  }

  public redirectToSelect = (id, horario) => {
    const fecha = moment(horario).format('YYYY-MM-DDTHH:mm:ss');
    const url = `/boletos/asientos/funcion/${id}/fecha/${fecha}`;
    this.router.navigate([url]);
  }

}


