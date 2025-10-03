import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Lightbox } from './lightbox/lightbox';
import {SlideshowButton} from './slideshow-button/slideshow-button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, CommonModule, Lightbox, SlideshowButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('e-commerce_UI_angular');

  logo: string = 'images/logo.svg';
  activeLink = '';



  setActive(value: string) {
    this.activeLink = value;
  }
}
