import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { IdentificationsComponent } from './identifications/identifications.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParObjetComponent } from './recherche-par-objet/recherche-par-objet.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginagentService } from './loginagent.service';
import { DetailsReclamComponent } from './details-reclam/details-reclam.component';
import { ValidationPageComponent } from './validation-page/validation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReclamationsComponent,
    IdentificationsComponent,
    UpdateReclamationComponent,
    RechercheParObjetComponent,
    ConsultationComponent,
    LoginComponent,
    FirstpageComponent,
    RegisterComponent,
    NavbarComponent,
    DetailsReclamComponent,
    ValidationPageComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
