import { Component, OnInit } from '@angular/core';
import { bestSellersData, brandData, carouselData, categoryData, dataVariousProduct, offersData, recommendedData } from '@src/app/core/data';
import { Brand, CarrouselMain, Category, Product, ProductList } from '@src/app/core/models';
import SwiperCore, { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public carouselData: CarrouselMain[] = carouselData;
  public dataVariousProduct: ProductList[] = dataVariousProduct;
  public categoryData: Category[] = categoryData;
  public recommendedData: Product[] = recommendedData;
  public offersData: Product[] = offersData;
  public bestSellersData: Product[] = bestSellersData;
  public brandData: Brand[] = brandData;
  public idItemCategory;

  constructor() { }

  ngOnInit(): void {
    SwiperCore.use([ EffectFade, Navigation, Pagination, Keyboard, Autoplay ]);
  }

}
