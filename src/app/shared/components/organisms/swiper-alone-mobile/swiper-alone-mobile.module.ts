import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { SwiperAloneMobileComponent } from './swiper-alone-mobile.component';
import { CardVariousProductsComponent } from '../../molecules/card-various-products/card-various-products.component';


@NgModule({
  declarations: [ SwiperAloneMobileComponent, CardVariousProductsComponent ],
  exports: [ SwiperAloneMobileComponent ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SwiperAloneMobileModule { }
