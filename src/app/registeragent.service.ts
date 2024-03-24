import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Agent } from './model/agent.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisteragentService implements OnInit {

  private baseUrl="http://localhost:8082/reclamations/agent/register";
  ngOnInit(): void {
    
  }
  constructor(private httpClient :HttpClient) { }

  registerAgent(agent :Agent) : Observable<object>{
    console.log(agent)
    return this.httpClient.post(`${this.baseUrl}`,agent);

  }
}
