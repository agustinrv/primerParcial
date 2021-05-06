import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises/paises.service';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listaPaises:any[]=[];
  @Input() paisDesabilitar:any=false;
  @Output() paisSeleccionado:EventEmitter<any>=new EventEmitter<any>();
  
  constructor(private servicioPaises:PaisesService) { }

  ngOnInit(): void {
    this.listaPaises=this.servicioPaises.getPaises();
  }

  public PaisSeleccionado(pais)
  {
      this.paisSeleccionado.emit(pais);
  }

}
