import { Component, OnInit } from '@angular/core';
import { Agent } from '../model/agent.model';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-identifications',
  templateUrl: './identifications.component.html',
  styleUrls: ['./identifications.component.css']
})
export class IdentificationsComponent implements OnInit {


  agents! : Agent[];

  constructor(private reclamationService: ReclamationService) {
  }




  ngOnInit(): void {
    this.chargerAgents();
}

chargerAgents(){ 
  this.reclamationService.listeAgents().subscribe(agt => { console.log(agt); 
    this.agents = agt; });
   

  }

}
