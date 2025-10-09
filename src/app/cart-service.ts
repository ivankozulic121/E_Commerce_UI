import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  private currentQuantitySubject = new BehaviorSubject<number>(0);
  currentQuantity$ = this.currentQuantitySubject.asObservable();

  setCurrentCount(currentCount: number) {
    this.cartCountSubject.next(currentCount);
    console.log("Current Count: ", currentCount);
  }

  getCurrentCount() {
    return this.cartCountSubject.value;
  }

  setCurrentQuantity(quantity: number) {
    this.currentQuantitySubject.next(quantity);
  }

  addToCart() {
    this.cartCountSubject.next(this.cartCountSubject.value + this.currentQuantitySubject.value)
    this.currentQuantitySubject.next(0);
  }
}
