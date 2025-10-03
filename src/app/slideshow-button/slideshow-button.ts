import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-slideshow-button',
  imports: [],
  templateUrl: './slideshow-button.html',
  styleUrl: './slideshow-button.scss'
})
export class SlideshowButton {

  @Input() type: string = 'next';
  @Input() slideShowIndex: number = 0;
  @Output() slideChange = new EventEmitter();


  get icon () {

    return this.type === 'next' ? 'images/icon-next.svg' : 'images/icon-previous.svg';
  }

  get isDisabled () {

    if (this.type === 'prev' && this.slideShowIndex === 0) return true;
    return this.type === 'next' && this.slideShowIndex === 3;


  }

  handleClick() {

    if (this.type === 'prev') this.slideChange.emit(this.slideShowIndex - 1);
    else this.slideChange.emit(this.slideShowIndex + 1);

  }
}
