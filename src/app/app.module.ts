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
import { RechercheParAnneeComponent } from './recherche-par-annee/recherche-par-annee.component';
import { RechercheParObjetComponent } from './recherche-par-objet/recherche-par-objet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReclamationsComponent,
    IdentificationsComponent,
    UpdateReclamationComponent,
    RechercheParAnneeComponent,
    RechercheParObjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
