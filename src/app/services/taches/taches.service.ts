import { Injectable } from '@angular/core';
import { Taches } from '../../models/taches/taches';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TachesService {


  headers: HttpHeaders;
  token?: String;
  private baseUrl: string;

  constructor( private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8080/api/tache";

    this.headers =  new HttpHeaders({ Authorization:'Bearer '+ this.token,
      'Content-Type': 'application/json; charset=uTF-8'
    })
  }

  // auth = 'Bearer ' + sessionStorage.getItem('token');

  createTache(taches: Taches, id :number):Observable<Taches>{
    let baseUrlGet = this.baseUrl + "/create" + id;
    return this.httpClient.post<Taches>(baseUrlGet, taches,{headers: this.headers})
  }

  tachesList(): Observable<Taches[]>{
    let baseUrlGet = this.baseUrl + "/all";
    return this.httpClient.get<Taches[]>(baseUrlGet)
  }

  getTacheById(Id: number): Observable<Taches>{
    let baseUrlGet = this.baseUrl +"/"+ Id;
    //console.log(baseUrlGet, {headers: {"Authorization": this.auth}});
    return this.httpClient.get<Taches>(baseUrlGet)
  }

  updateTache(Id: number, taches: Taches): Observable<Taches>{
    let baseUrlGet = this.baseUrl+ "/" + Id;
    return this.httpClient.put<Taches>(baseUrlGet, taches)
  }

  deleteTache(Id: number): Observable<Taches>{
    let baseUrlGet = this.baseUrl +"/" + Id
   
    return this.httpClient.delete<Taches>(baseUrlGet,{headers: this.headers})
  
  }
}
