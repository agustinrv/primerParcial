import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PaisesListadoComponent } from './componentes/paises/paises-listado/paises-listado.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path: '', redirectTo: 'paises/listado', pathMatch: 'full'},

  
  {path:"busqueda",component:BusquedaComponent},
  {path:"peliculas",
    children:[
      {path:"alta",component:PeliculaAltaComponent},
      {path:"listado",component:PeliculaListadoComponent}
    ]
  },
  {path:"actor",
    children:[
      {path:"alta",component:ActorAltaComponent},
      {path:"listado",component:ActorListadoComponent}
    ]
  },
  {path:"paises",
    children:[
      {path:"listado",component:PaisesListadoComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
