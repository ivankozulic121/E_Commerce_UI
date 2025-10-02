import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxModal } from './lightbox-modal';

describe('LightboxModal', () => {
  let component: LightboxModal;
  let fixture: ComponentFixture<LightboxModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightboxModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightboxModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
