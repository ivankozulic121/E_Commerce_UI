import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModal } from '../lightbox-modal/lightbox-modal';
import { ImageGallery } from './ImageGallery';


@Component({
  selector: 'app-lightbox',
  imports: [CommonModule, LightboxModal],
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss'
})
export class Lightbox {
  images: ImageGallery[] = [
    { full: 'images/image-product-1.jpg', thumb: 'images/image-product-1-thumbnail.jpg' },
    { full: 'images/image-product-2.jpg', thumb: 'images/image-product-2-thumbnail.jpg' },
    { full: 'images/image-product-3.jpg', thumb: 'images/image-product-3-thumbnail.jpg' },
    { full: 'images/image-product-4.jpg', thumb: 'images/image-product-4-thumbnail.jpg' }
  ];

  selectedImage: string = 'images/image-product-1.jpg';

  isModalOpen: boolean = false;

   
  selectImage(img: string) {
    console.log("MODAL OPENED")
    this.selectedImage = img;
    this.isModalOpen = true;
  }

  closeLightbox() {
    console.log("MODAL CLOSED");
    this.isModalOpen = false;
  }
}
