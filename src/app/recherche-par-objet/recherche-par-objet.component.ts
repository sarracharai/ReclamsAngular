import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../model/reclamation.model';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-recherche-par-objet',
  templateUrl: './recherche-par-objet.component.html',
  styles: [
  ]
})
export class RechercheParObjetComponent implements OnInit {
 
 
  AllReclamations! : Reclamation[];
  reclamations!:Reclamation[];
  objet!: string;
  searchTerm!: string;


  constructor(private reclamationService: ReclamationService){}

  onKeyUp(filterText : string){ 
    this.reclamations = this.AllReclamations.filter(item =>
       item.objetRecalamation.toLowerCase().includes(filterText)); 
      }
  ngOnInit(): void {
    this.reclamationService.listeReclamation().subscribe(reclams => {
       console.log(reclams); this.AllReclamations = reclams;
       });

  }

}
