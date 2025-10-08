import { Component } from '@angular/core';
import {QuantityInfo} from "../quantity-info/quantity-info";

@Component({
  selector: 'app-sneaker-info',
    imports: [
        QuantityInfo
    ],
  templateUrl: './sneaker-info.html',
  styleUrl: './sneaker-info.scss'
})
export class SneakerInfo {

}
