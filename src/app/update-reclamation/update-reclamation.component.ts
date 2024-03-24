import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../services/reclamation.service';
import { Reclamation } from '../model/reclamation.model';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styles: [
  ]
})
export class UpdateReclamationComponent implements OnInit {

  currentReclamation = new Reclamation();

  constructor(private activatedRoute: ActivatedRoute, 
              private router :Router,
              private reclamationService: ReclamationService) { }


              updateReclamation() {
                this.reclamationService.updateReclamation(this.currentReclamation).subscribe(prod => {
                  this.router.navigate(['/detailsReclam', this.currentReclamation.reference]);
                });
              }

    // retourner() {
    //   this.router.navigate(['/detailsReclam/:reference']);
    // }

    logout() {
  
      this.router.navigate(['/login']);  
    }

  ngOnInit(): void {

      this.reclamationService.consulterReclamation(this.activatedRoute.snapshot.params['reference']). 
      subscribe(reclam =>{ this.currentReclamation = reclam; 
        } ) ;
  }

}
