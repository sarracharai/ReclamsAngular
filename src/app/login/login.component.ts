import { LoginagentService } from './../loginagent.service';
import { Component, OnInit } from '@angular/core';
import { Agent } from '../model/agent.model';
import { ReclamationService } from '../services/reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  agent:Agent = new Agent();

  constructor(private loginagentservice : LoginagentService,
    private router: Router
    ){}
  ngOnInit(): void {
  }

  agentLogin() {
    console.log(this.agent);
    this.loginagentservice.loginAgent(this.agent).subscribe(
      data => {
        
        this.router.navigate(['/firstpage']); // Mettez ici le chemin de la page suivante
      },
      error => alert("Sorry, please enter correct agentMatricule and Password")
    );
  }

}