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
  reclamations! : Reclamation[]; //un tableau de Reclamation
  reclamation! : Reclamation;
  agents! : Agent[];
  agent! : Agent;
  

  constructor(private http : HttpClient) {

    

     /*this.agents = [ 
      {matriculeAgent : "11FF", numTel : 23458763, nomAgent :"sarra", prenomAgent :"charaii", adresseAgent :"Nabeul",emailAgent : "sarra@gmail.com", dateNaissance : new Date("12/17/2010")},
    ];
/*/
    /* this.reclamations = [ 
      {reference : 1, societe : "PC Asus", dateReclamation : new Date("01/14/2011"), annee : "2018" , nbSemaine : 4, objetRecalamation :"MALADIE" , 
      //agent : {matriculeAgent : "11FF", numTel : 23458763, nomAgent :"sarra", prenomAgent :"charaii", adresseAgent :"Nabeul",emailAgent : "sarra@gmail.com", dateNaissance : new Date("12/17/2010")},
    },

      {reference : 2, societe : "Imprimante Epson", dateReclamation : new Date("12/17/2010"), annee : "2018" , nbSemaine :3, objetRecalamation :"MALADIE",
       //agent : {matriculeAgent : "11FF", numTel : 23458763, nomAgent :"sarra", prenomAgent :"charaii", adresseAgent :"Nabeul",emailAgent : "sarra@gmail.com", dateNaissance : new Date("12/17/2010")},
    },

      {reference : 3, societe :"Tablette Samsung",  dateReclamation : new Date("02/20/2020"), annee : "1017" , nbSemaine :3, objetRecalamation :"MALADIE" ,
      //agent : {matriculeAgent : "11FF", numTel : 23458763, nomAgent :"sarra", prenomAgent :"charaii", adresseAgent :"Nabeul",emailAgent : "sarra@gmail.com", dateNaissance : new Date("12/17/2010")}
    }
    
    
      ]; */
    }

  listeAgents():Observable<Agent[]> {
    return this.http.get<Agent[]>(this.apiURL+"/ag"); 
    }


  // listeReclamation():Reclamation[] {
  //   return this.reclamations; 
  //   }

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
 
   
}