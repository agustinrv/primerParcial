import { Injectable } from '@angular/core';
import {HttpClient} from"@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public listaPaises:any[]=[];

  constructor(private http:HttpClient) { 

    this.http.get('https://restcountries.eu/rest/v2/region/americas').subscribe((data: any) => {
      data.forEach(element => {
        this.listaPaises.push(element)
      });
    });

  }

  public getPaises()
  {
     return this.listaPaises;
  }

  public EliminarPais(pais) {
    let eliminar;
    for (let index = 0; index < this.listaPaises.length; index++) {
      if (pais.name == this.listaPaises[index].name) {
        eliminar = index;
        break;
      }
    }
    this.listaPaises.splice(eliminar, 1);
  }



}
