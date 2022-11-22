import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../Models/personne';
import { ApipersonService } from '../Services/apiperson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personne: Personne[] = []

  constructor(private api: ApipersonService, private router:Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.api.getAll().subscribe(data => this.personne = data)
  }

  deletePersonne(id: any) {
    this.api.deletePersonne(id).subscribe(() => {
      this.personne = this.personne.filter(p => p.id != id)
    })
  }

  btnEdit(id:any){
    this.router.navigateByUrl("/edit/"+id)
  }
}
