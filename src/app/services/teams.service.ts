import { Injectable } from '@angular/core';
import { Teams } from '../components/list-teams/teams';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private urlEnd:string = 'https://wo-fifa.azurewebsites.net'
  private httHeaders = new HttpHeaders();
  conte:any = [];
  constructor(private http:HttpClient) { 
  
  }

  getTeams():Observable<Teams[]>{
    
    // return 
    return this.conte = this.http.get(this.urlEnd+'/equipos/listar/0/5').pipe(
      // respnse => this.conte = respnse,
      // this.conte = this.conte["content"],
      map(resp => {this.conte = resp;
                 return this.conte["content"].map(
                  (resp: any)=>{
                    console.log(resp);
                    return {
                      nombre: resp.nombre,
                      estadio: resp.estadio,
                      sitioWeb: resp.sitioWeb,
                      nacionalidad: resp.nacionalidad,
                      fundacion: resp.fundacion,
                      entrenador: resp.entrenador,
                      capacidad: resp.capacidad,
                      valor: resp.valor,
                    }
                 
                  })
                }

    )
    )
    

}

crearTeam(team:Teams){

    return this.http.post(this.urlEnd+'/crear',team,{headers:this.httHeaders})

  
}

login():Observable<any[]>
{
  let httpHeaders1 = new HttpHeaders({
    // 'Content-type': 'aplication/json',
    'responseType':'text',
    'Authorization': 'Basic ' +('username:password')});
  console.log('logeando usuaerio')
  console.log(this.httHeaders.get('Authorization'));
  let res: any[] = [];
  let bodsy = [{'usuario':'123','contraseña':'123dfdf'}];
  return this.http.post<any>(this.urlEnd+'/login',{Headers:httpHeaders1});
  
}
}
