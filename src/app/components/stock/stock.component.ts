import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  result: any;

  ngOnInit(): void {
  }
  calculatePrice(stock1, price1, stock2, price2) {
    this.result = ((stock1 * price1) + (stock2 * price2)) / (stock1 + stock2);
  }
}
