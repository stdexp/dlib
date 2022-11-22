import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/personne';
import { ApipersonService } from '../Services/apiperson.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  personnes: Personne[] = []

  personne : any = {
    id:null,
    nom:"",
    prenom:""
  }

  constructor(private api: ApipersonService) { }

  ngOnInit(): void {
  }

  addPersonne(){
    this.api.addPersonne(this.personne).subscribe(data=>{
      this.personnes=[data]
    })
    this.vide()
  }

  vide(){
    this.personne = {
      id:null,
      nom:"",
      prenom:""
    }
  }

}
