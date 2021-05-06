import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public listaActores:Actor[]=[];
  public listaPaises:any=[];
  public paisSeleccionado:any=false;
  public nuevoActor:Actor=new Actor();

  constructor() 
  {

  }

  ngOnInit(): void {
    
  }

  public SeleccionarPais($event)
  {
      this.paisSeleccionado=$event;
      this.nuevoActor.paisDeOrigen=$event.name;
  }

  public AgregarActor()
  {
    /*this.servicioActores.AgregarUno(this.nuevoActor).then(()=>{
     this.nuevoActor=new Actor();
     this.paisSeleccionado=false;
    });
    alert("Agregado"); */
  }

}
