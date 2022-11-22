import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Personne } from '../Models/personne';

@Injectable({
  providedIn: 'root'
})
export class ApipersonService {

  URL = "http://localhost:3000/personne"

  constructor(private http: HttpClient) { }
  
  //getAll function
  getAll() {
    return this.http.get<Personne[]>(this.URL)
  }

  //deletePersonne function
  deletePersonne(id:any) {
    return this.http.delete<Personne>(this.URL+"/"+id)
  }

  //addPersonne
  addPersonne(personne:any){
    return this.http.post<Personne>(this.URL, personne)
  }


  //editPersonne
  editPersonne(personne:any){
    return this.http.put<Personne>(this.URL+"/"+personne.id,personne)
  }

}
