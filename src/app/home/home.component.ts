import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../model/reclamation.model';
import { ReclamationService } from '../services/reclamation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReclamation = new Reclamation();
  constructor(private reclamationService: ReclamationService,
              private router : Router) { }

addReclamation() {
  //console.log(this.newReclamation);
  this.reclamationService.ajouterReclamation(this.newReclamation)
   .subscribe(reclam => { 
  console.log(reclam);
  this.router.navigate(['reclamations']);
  

});;
}



 
  ngOnInit(): void {
  } 
  


}
