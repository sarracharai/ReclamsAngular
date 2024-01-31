import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';
import { Reclamation } from '../model/reclamation.model';

@Component({
  selector: 'app-recherche-par-annee',
  templateUrl: './recherche-par-annee.component.html',
  styleUrls: ['./recherche-par-annee.component.css']
})
export class RechercheParAnneeComponent implements OnInit {
  AllReclamations! : Reclamation[];
  reclamations!:Reclamation[];
  annee!: string;
  searchTerm!: string;
  

  constructor(private reclamationService: ReclamationService){}

  // rechercherReclams(){ 
  //   this.reclamationService.rechercherParNom(this.annee). 
  //    subscribe(reclams => { this.reclamations = reclams;
  //      console.log(reclams)}); 
  //     }


  
  onKeyUp(filterText : string){ 
    this.reclamations = this.AllReclamations.filter(item =>
       item.annee.toLowerCase().includes(filterText)); 
      }
  ngOnInit(): void {
    this.reclamationService.listeReclamation().subscribe(reclams => {
       console.log(reclams); this.AllReclamations = reclams;
       });

  }
 

}
