import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { IdentificationsComponent } from './identifications/identifications.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { RechercheParObjetComponent } from './recherche-par-objet/recherche-par-objet.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsReclamComponent } from './details-reclam/details-reclam.component';
import { ValidationPageComponent } from './validation-page/validation-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: "home", component : HomeComponent},
  {path: "reclamations", component : ReclamationsComponent},
  {path: "identifications", component : IdentificationsComponent},
  {path: "updateReclamation/:reference", component: UpdateReclamationComponent},
  {path: "rechercheParObjet", component : RechercheParObjetComponent},
  {path: "consulter", component: ConsultationComponent },
  {path: "firstpage", component: FirstpageComponent },
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"navbar", component: NavbarComponent},
  {path:"detailsReclam/:reference", component: DetailsReclamComponent},
  {path:"validation", component: ValidationPageComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
