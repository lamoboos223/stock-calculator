import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-calculator';

  public stock1: number;
  public price1: number;
  public stock2: number;
  public price2: number;
  public result: number;

  calculate(){
    this.result = ((this.stock1 * this.price1) + (this.stock2 * this.price2))
     / (this.stock1 + this.stock2);

  }
  
}
