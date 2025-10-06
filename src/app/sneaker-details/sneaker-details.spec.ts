import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerDetails } from './sneaker-details';

describe('SneakerDetails', () => {
  let component: SneakerDetails;
  let fixture: ComponentFixture<SneakerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SneakerDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakerDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
