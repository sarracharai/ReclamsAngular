import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  archivedReclamations: any[] = []; // Replace 'any' with the actual type of your reclamation

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit() {
    // this.reclamationService.getReclamationsArchivees().subscribe((archivedReclamations: any[]) => {
    //   this.archivedReclamations = archivedReclamations;
    // });
  }
}
