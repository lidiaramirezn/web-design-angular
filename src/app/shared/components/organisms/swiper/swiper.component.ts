import { Component, Input } from '@angular/core';
import SwiperCore, { Navigation } from "swiper/core";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})

export class SwiperComponent {
  @Input() public data = [];
  @Input() public type: string;
  @Input() public mainClass: string;

  constructor( ) {
    SwiperCore.use([Navigation]);
  }

  slicedData(index) {
    return this.data.slice(index, index+4);
  }
}
