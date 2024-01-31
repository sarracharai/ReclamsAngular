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
    //console.log(this.currentReclamation);
    this.reclamationService.updateReclamation(this.currentReclamation).subscribe(prod => { 
      this.router.navigate(['reclamations']); } );
    
    
    }

  ngOnInit(): void {

    // console.log(this.route.snapshot.params.id);
     //this.currentReclamation = this.reclamationService.consulterReclamation(this.activatedRoute.snapshot. params['reference']);
      //console.log(this.currentReclamation);


      this.reclamationService.consulterReclamation(this.activatedRoute.snapshot.params['reference']). 
      subscribe(reclam =>{ this.currentReclamation = reclam; 
        } ) ;
  }

}
