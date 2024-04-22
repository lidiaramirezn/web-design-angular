import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-various-products',
  templateUrl: './card-various-products.component.html',
  styleUrls: ['./card-various-products.component.scss']
})
export class CardVariousProductsComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
