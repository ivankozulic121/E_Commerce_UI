import { Component } from '@angular/core';
import { CartService} from '../cart-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-cart-component',
  imports: [
    AsyncPipe
  ],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss'
})
export class CartComponent {

  cartCount$;

  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$
  }





}
