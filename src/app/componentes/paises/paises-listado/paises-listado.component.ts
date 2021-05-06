import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises/paises.service';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  public paisSeleccionado:any=false;
  public desabilitarPais:any=false;
  constructor(private servicioPaises:PaisesService) 
  { 

  }

  ngOnInit(): void {
  }

  public SeleccionarPais($event)
  {
      this.paisSeleccionado=$event;
  }

  public DesabilitarPais($event)
  {
    this.servicioPaises.EliminarPais($event);
    this.paisSeleccionado=false;
  }

}
