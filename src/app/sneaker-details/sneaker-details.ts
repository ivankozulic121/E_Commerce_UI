import { Component } from '@angular/core';
import {Lightbox} from '../lightbox/lightbox';
import {SneakerInfo} from '../sneaker-info/sneaker-info';

@Component({
  selector: 'app-sneaker-details',
  imports: [Lightbox, SneakerInfo],
  templateUrl: './sneaker-details.html',
  styleUrl: './sneaker-details.scss'
})
export class SneakerDetails {

}
