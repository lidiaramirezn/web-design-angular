import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperAloneMobileComponent } from './swiper-alone-mobile.component';

describe('SwiperAloneMobileComponent', () => {
  let component: SwiperAloneMobileComponent;
  let fixture: ComponentFixture<SwiperAloneMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperAloneMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperAloneMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
