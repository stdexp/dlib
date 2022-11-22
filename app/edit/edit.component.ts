import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from '../Models/personne';
import { ApipersonService } from '../Services/apiperson.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  personnes : Personne[]=[]
  myId : any


  constructor(private api:ApipersonService, private paramQuerry:ActivatedRoute) { }

  ngOnInit(): void {
    this.paramQuerry.params.subscribe(param=>this.myId=param)
    this.getAll()
  }

  getAll(){
    this.api.getAll().subscribe(data=>this.personnes=data.filter(p=>p.id==this.myId.id))
  }

  editPersonne(personne : any){
    this.api.editPersonne(personne).subscribe(data=>{
      personne = data
    })
  }

}
