import { Component } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-validation-page',
  templateUrl: './validation-page.component.html',
  styleUrls: ['./validation-page.component.css']
})
export class ValidationPageComponent {
  newReclamation: any = {};
  isSummaryVisible: boolean = false;

  constructor(private reclamationService: ReclamationService) {}

  // confirmAddReclamation() {
  //   // Appeler le service pour ajouter la réclamation
  //   this.reclamationService.ajouterReclamation(this.newReclamation)
  //     .subscribe(
  //       (reclam) => {
  //         // La réclamation a été ajoutée avec succès, afficher le récapitulatif
  //         this.isSummaryVisible = true;
  //       },
  //       (error) => {
  //         console.error('Erreur lors de l\'ajout de la réclamation', error);
  //         // Gérer l'erreur, afficher un message à l'utilisateur, etc.
  //       }
  //     );
  // }

  // cancelSummary() {
  //   // Cacher le récapitulatif
  //   this.isSummaryVisible = false;
  // }
}
