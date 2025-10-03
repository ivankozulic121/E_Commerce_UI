import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageGallery } from '../lightbox/ImageGallery';
import {SlideshowButton} from '../slideshow-button/slideshow-button';

@Component({
  selector: 'app-lightbox-modal',
  imports: [CommonModule, SlideshowButton],
  templateUrl: './lightbox-modal.html',
  styleUrl: './lightbox-modal.scss'
})
export class LightboxModal {


   @Input() images: ImageGallery[] = [];
   @Input() selectedImage: string | null = null;
   @Output() close = new EventEmitter<void>;

  selectImage(img: string) {

    this.selectedImage = img;
  }

  closeLightbox() {
    console.log("EMITTED");
    this.close.emit();
  }
}
