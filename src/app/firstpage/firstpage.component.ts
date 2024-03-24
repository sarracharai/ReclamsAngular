import { Component } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent {

  isImageVisible = true;
  isCardVisible = true;

  ngOnDestroy(): void {
   
    this.isCardVisible = true;
    this.isImageVisible = true;
  }

  hideCard() {
    this.isCardVisible = false;
    this.isImageVisible =false;
  }

}
