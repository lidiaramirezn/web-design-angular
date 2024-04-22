import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SearchModule } from '@components/molecules/search/search.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { SliderSwiperModule } from '@src/app/shared/components/organisms/swiper/swiper.module';
import { CommonModule } from '@angular/common';
import { SwiperAloneMobileModule } from '@src/app/shared/components/organisms/swiper-alone-mobile/swiper-alone-mobile.module';
import { CardVariousProductsComponent } from '@src/app/shared/components/molecules/card-various-products/card-various-products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    SwiperModule,
    SliderSwiperModule,
    SwiperAloneMobileModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
