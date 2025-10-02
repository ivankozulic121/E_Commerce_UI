import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Lightbox } from './lightbox/lightbox';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, CommonModule, Lightbox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('e-commerce_UI_angular');

  activeLink = '';

  

  setActive(value: string) {
    this.activeLink = value;
  }
}
