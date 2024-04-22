import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swiper-alone-mobile',
  templateUrl: './swiper-alone-mobile.component.html',
  styleUrls: ['./swiper-alone-mobile.component.scss']
})
export class SwiperAloneMobileComponent {
  @Input() public data = [];
  @Input() public type: string;
  @Input() public countImages: string;
  @Input() public mainClass: string;
  public count;

  constructor() {

  }

  ngAfterViewInit() {

    this.count = Number(this.countImages);
  }

  ngOnInit(): void {
  }

  slicedData(index) {
    return this.data.slice(index, index + this.count);
  }
}
