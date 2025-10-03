import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowButton } from './slideshow-button';

describe('SlideshowButton', () => {
  let component: SlideshowButton;
  let fixture: ComponentFixture<SlideshowButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideshowButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideshowButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
