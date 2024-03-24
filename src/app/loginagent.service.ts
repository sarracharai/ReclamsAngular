
import { Injectable } from '@angular/core';
import { Agent } from './model/agent.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginagentService {
  private baseUrl="http://localhost:8082/reclamations/agent/login";

  constructor(private httpClient: HttpClient) { }


  loginAgent(agent:Agent):Observable<object>{
    console.log(agent)
  return this.httpClient.post(`${this.baseUrl}`,agent);

  }
}