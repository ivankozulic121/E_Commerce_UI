import { Component } from '@angular/core';
import {CartService} from '../cart-service';

@Component({
  selector: 'app-quantity-info',
  imports: [],
  templateUrl: './quantity-info.html',
  styleUrl: './quantity-info.scss'
})
export class QuantityInfo {

  count: number = 0;
  //currentQuantity$
  constructor(private cartService: CartService) {
    this.cartService.currentQuantity$.subscribe(q => this.count = q)
  }



   increase() {
      this.cartService.setCurrentQuantity(this.count  + 1);
     //this.currentQuantity$.value++
     //this.cartService.setCurrentCount(this.currentQuantity$.- 1);
   }

  decrease() {
    this.cartService.setCurrentQuantity(this.count - 1);
  }
}
