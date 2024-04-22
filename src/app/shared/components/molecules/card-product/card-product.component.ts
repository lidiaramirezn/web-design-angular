import { Component, Input } from '@angular/core';
import { Product } from '@core/models';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {

  @Input() public data: Product;

}
