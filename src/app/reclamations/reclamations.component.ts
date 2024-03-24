import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../model/reclamation.model';
import { ReclamationService } from '../services/reclamation.service';
import { Agent } from '../model/agent.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {


  reclamations! : Reclamation[]; //un tableau de Reclam
  agents! : Agent[];
  
  constructor(private reclamationService: ReclamationService,
    private router : Router) {
  
  

}
ngOnInit(): void {
  this.chargerReclamations();
  this.chargerAgents();
}


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


  //  archiverReclamation(r: Reclamation) {
  //   const conf = confirm("Voulez-vous archiver cette réclamation ?");
  // if (conf) {
  //   this.reclamationService.archiveReclamation(r.reference.toString()).subscribe(
  //     () => {
  //       console.log("Réclamation archivée");
  //       // Reload the list of reclamations after archiving
  //       this.chargerReclamations();
  //     },
  //     (error) => {
  //       console.error("Erreur lors de l'archivage de la réclamation", error);
  //       // Handle error as needed
  //     }
  //   );
  // }
  //   }
   
   
}

