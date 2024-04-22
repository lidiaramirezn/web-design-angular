import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { SwiperModule } from 'swiper/angular';
import { CardProductComponent } from '@components/molecules/card-product/card-product.component';
import { CardVariousProductsComponent } from '@components/molecules/card-various-products/card-various-products.component';

@NgModule({
  declarations: [
    SwiperComponent,
    CardProductComponent
  ],
  exports: [
    SwiperComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SliderSwiperModule { }
