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
                this.reclamationService.ajouterReclamation(this.newReclamation)
                  .subscribe(reclam => { 
                    console.log(reclam);
                    this.router.navigate(['/detailsReclam', reclam.reference]);
                  },
                  (error) => {
                    console.error('Erreur lors de l\'ajout de la réclamation', error);
                    // Gérer l'erreur, afficher un message à l'utilisateur, etc.
                  });
              }
              

// consulterReclamation() {
  
//   this.router.navigate(['/consulter']);
// }

// logout() {
  
//   this.router.navigate(['/login']);  // Remplacez '/login' par le chemin de votre page de connexion
// }

 
  ngOnInit(): void {
  } 
}
