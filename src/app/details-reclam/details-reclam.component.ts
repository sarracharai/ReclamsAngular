import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../services/reclamation.service';
import { Reclamation } from '../model/reclamation.model';

@Component({
  selector: 'app-details-reclam',
  templateUrl: './details-reclam.component.html',
  styleUrls: ['./details-reclam.component.css']
})
export class DetailsReclamComponent implements OnInit {

  reclamation: any;
  isSummaryVisible: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    const reference = this.route.snapshot.paramMap.get('reference');
  
    if (reference !== null) {
      this.reclamationService.consulterReclamation(+reference).subscribe(data => {
        this.reclamation = data;
      });
    } else {
      console.error('La référence est nulle.');
    }
  }

  editReclamation() {
    this.router.navigate(['/updateReclamation', this.reclamation.reference]);
  }

  // retourner() {
  //   this.router.navigate(['/reclamations']);
  // }

  annuler() {
    if (window.confirm('Voulez-vous vraiment annuler l\'ajout de la réclamation?')) {
        console.log('Opération annulée.');
        this.router.navigate(['/home']);
    }
  }

  imprimer() {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir imprimer cette page ?");
    if (confirmation) {
      window.print();
    }
  }

  valider() {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir valider cette réclamation ?");
    if (confirmation) {
      this.router.navigate(['/reclamations']);
    }
  }
  

  // cancelSummary() {
  //   this.isSummaryVisible = false;
  // }
}
