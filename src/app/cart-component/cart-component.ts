import { Component } from '@angular/core';
import { CartService} from '../cart-service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {CartContent} from '../cart-content/cart-content';

@Component({
  selector: 'app-cart-component',
  imports: [
    AsyncPipe,
    CartContent,
    CommonModule
  ],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss'
})
export class CartComponent {

  cartCount$;
  showContent: boolean = false;

  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$
  }

  onCartClick() {
    this.showContent = !this.showContent;
  }





}
