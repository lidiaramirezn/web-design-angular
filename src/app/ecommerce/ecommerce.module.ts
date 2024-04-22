import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { EcommerceRoutingModule } from './ecommerce.routing.module';
import { HeaderModule } from '@components/organisms/header/header.module';
import { HomeModule } from './views/home/home.module';
import { FooterModule } from '@components/organisms/footer/footer.module';
import { BannerComponent } from '@components/atoms/banner/banner.component';

@NgModule({
  declarations: [
    EcommerceComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    HeaderModule,
    HomeModule,
    FooterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EcommerceModule { }
