import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { IdentificationsComponent } from './identifications/identifications.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { RechercheParAnneeComponent } from './recherche-par-annee/recherche-par-annee.component';
import { RechercheParObjetComponent } from './recherche-par-objet/recherche-par-objet.component';

const routes: Routes = [
  {path: "home", component : HomeComponent},
  {path: "reclamations", component : ReclamationsComponent},
  {path: "identifications", component : IdentificationsComponent},
  {path: "updateReclamation/:reference", component: UpdateReclamationComponent},
  {path: "rechercheParAnne", component : RechercheParAnneeComponent},
  {path: "rechercheParObjet", component : RechercheParObjetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
