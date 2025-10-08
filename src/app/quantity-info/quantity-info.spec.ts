import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityInfo } from './quantity-info';

describe('QuantityInfo', () => {
  let component: QuantityInfo;
  let fixture: ComponentFixture<QuantityInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
