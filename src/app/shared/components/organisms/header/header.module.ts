import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SearchModule } from '@components/molecules/search/search.module';
import { SidebarComponent } from '../../molecules/sidebar/sidebar.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    SearchModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeaderModule { }
