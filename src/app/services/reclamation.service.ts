import { Injectable } from '@angular/core';
import { Reclamation } from '../model/reclamation.model';
import { Agent } from '../model/agent.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
 };

@Injectable({
  providedIn: 'root'
})


export class ReclamationService {
  apiURL: string = 'http://localhost:8082/reclamations/api';
  baseUrl="http://localhost:8082/reclamations/agent";
  reclamations! : Reclamation[]; //un tableau de Reclamation
  reclamation! : Reclamation;
  agents! : Agent[];
  agent! : Agent;
  

  constructor(private http : HttpClient) {

    }

  listeAgents():Observable<Agent[]> {
    return this.http.get<Agent[]>(this.baseUrl); 
    }

  listeReclamation(): Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.apiURL); 
      }

 

  ajouterReclamation( reclam: Reclamation):Observable<Reclamation>{ 
    return this.http.post<Reclamation>(this.apiURL, reclam, httpOptions); }
      

  supprimerReclamation(reference : number) { const url = `${this.apiURL}/${reference}`;
  return this.http.delete(url, httpOptions); }


 

  consulterReclamation(reference:number): Observable<Reclamation>{ 
    const url = `${this.apiURL}/${reference}`;
    return this.http.get<Reclamation>(url);
   }

   

  
   trierReclamations(){
    this.reclamations = this.reclamations.sort((n1,n2) => {
      if (n1.reference! > n2.reference!) 
      { return 1; } 
      if (n1.reference! < n2.reference!) 
      {return -1;}
      return 0;
    });
     }


updateReclamation(reclam:Reclamation) : Observable<Reclamation> { 
  return this.http.put<Reclamation>(this.apiURL, reclam, httpOptions); }

rechercherParNom(annee: string):Observable< Reclamation[]> {
     const url = `${this.apiURL}/reclamsByAnnee/${annee}`;
      return this.http.get<Reclamation[]>(url);
     }

rechercherParObjet(objetRecalamation: string):Observable< Reclamation[]> {
      const url = `${this.apiURL}/reclamsByobjet/${objetRecalamation}`;
       return this.http.get<Reclamation[]>(url);
      }
 

      // getLatestReclamation(): Observable<Reclamation> {
      //   return this.http.get<Reclamation>(`${this.apiURL}/latest`);
      // }

     
      // getReclamationsArchivees(): Observable<any[]> {
      //   return this.http.get<any[]>(`${this.apiURL}/archivees`);
      // }
    
      // archiveReclamation(reference: string): Observable<any> {
      //   return this.http.put<any>(`${this.apiURL}/archive/${reference}`, {});
      // }
   
}