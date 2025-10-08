import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-info',
  imports: [],
  templateUrl: './quantity-info.html',
  styleUrl: './quantity-info.scss'
})
export class QuantityInfo {

   count: number = 0;

   increase() {
     this.count++
   }

  decrease() {
    this.count--
  }
}
