import { Input, Component } from '@angular/core';
import {CartService} from '../cart-service';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [],
  templateUrl: './add-to-cart-button.html',
  styleUrl: './add-to-cart-button.scss'
})
export class AddToCartButton {

  constructor(private cartService: CartService) { }



  onClick() {
    this.cartService.addToCart();
  }
}
