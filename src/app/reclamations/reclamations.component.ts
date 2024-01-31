import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../model/reclamation.model';
import { ReclamationService } from '../services/reclamation.service';
import { Agent } from '../model/agent.model';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {

  reclamations! : Reclamation[]; //un tableau de Reclam
  agents! : Agent[];
  // objet!: string;
  // searchTerm!: string;
  // AllReclamations! : Reclamation[];
 
  
  

  constructor(private reclamationService: ReclamationService) {
  //this.reclamations =  reclamationService.listeReclamations();
 // this.agents = reclamationService.listeAgents();
    
  

}
ngOnInit(): void {
  // this.reclamationService.listeReclamation().subscribe(reclams => {
  //   console.log(reclams);
  //   this.AllReclamations = reclams;
  // });

  this.chargerReclamations();
  this.chargerAgents();
}



// onKeyUp(event: KeyboardEvent) {
//   const filterText = (event.target as HTMLInputElement).value.toLowerCase() || '';
//   if (!filterText) {
//     this.reclamations = [...this.AllReclamations];
//     return;
//   }

//   this.reclamationService.rechercherParObjet(filterText).subscribe(filteredReclamations => {
//     console.log(filteredReclamations);
//     this.reclamations = filteredReclamations;
//   });
// }




chargerAgents(){ 
  this.reclamationService.listeAgents().subscribe(agt => { console.log(agt); 
    this.agents = agt; });
   

  }

chargerReclamations(){ this.reclamationService.listeReclamation().subscribe(reclam => { 
  console.log(reclam);
   this.reclamations = reclam; 
}); 
}

 supprimerReclamation(r: Reclamation) { let conf = confirm("Etes-vous sûr ?");
 if (conf) this.reclamationService.supprimerReclamation(r.reference).subscribe(() => {
   console.log("reclamation supprimé"); this.chargerReclamations(); }); }
}

