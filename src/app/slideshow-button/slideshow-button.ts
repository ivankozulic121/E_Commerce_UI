import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow-button',
  imports: [],
  templateUrl: './slideshow-button.html',
  styleUrl: './slideshow-button.scss'
})
export class SlideshowButton {

  @Input() type: string = 'next';

  get icon () {

    return this.type === 'next' ? 'images/icon-next.svg' : 'images/icon-previous.svg';
  }
}
