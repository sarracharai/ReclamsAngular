import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MesReclamations';

  isImageVisible = true;
  isCardVisible = true;

  ngOnDestroy(): void {
    // Réinitialiser la propriété lorsque le composant est détruit (changement de page)
    this.isCardVisible = true;
    this.isImageVisible = true;
  }

  hideCard() {
    this.isCardVisible = false;
    this.isImageVisible =false;
  }
 
}
