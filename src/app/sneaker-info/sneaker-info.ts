import { Component } from '@angular/core';
import {QuantityInfo} from "../quantity-info/quantity-info";
import {AddToCartButton} from '../add-to-cart-button/add-to-cart-button';

@Component({
  selector: 'app-sneaker-info',
    imports: [
        QuantityInfo, AddToCartButton
    ],
  templateUrl: './sneaker-info.html',
  styleUrl: './sneaker-info.scss'
})
export class SneakerInfo {

    initialPrice: number = 250;
    discountRate: number = 0.5;
    currentPrice: number = this.initialPrice * this.discountRate;
}
