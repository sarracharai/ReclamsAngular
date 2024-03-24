import { RegisteragentService } from './../registeragent.service';
import { Component, OnInit } from '@angular/core';
import { Agent } from '../model/agent.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  agent:Agent = new Agent();
  
  constructor(private registeragentService: RegisteragentService){}

  agentRegister(){
    console.log(this.agent);
    this.registeragentService.registerAgent(this.agent).subscribe(data=>{
      alert("successfuly Agent is register?")
    },error=>alert("Agent not registred try again?"));
  }

  ngOnInit(): void {
    
  }
  
}
