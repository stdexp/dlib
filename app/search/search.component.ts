import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/personne';
import { ApipersonService } from '../Services/apiperson.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  personnes : Personne[]=[]

  personne : any={
    id:null
  }


  constructor(private api:ApipersonService) { }

  ngOnInit(): void {
    this.search
  }
  
  search(id:any){
    this.api.getAll().subscribe(data=>this.personnes=data.filter(p=>p.id==id))
  }
}
