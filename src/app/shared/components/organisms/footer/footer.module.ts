import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../atoms/icon/icon.component';

@NgModule({
  declarations: [
    FooterComponent,
    IconComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    MatExpansionModule,
    CommonModule
  ]
})
export class FooterModule { }
