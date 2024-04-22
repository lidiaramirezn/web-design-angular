import { Component, OnInit } from '@angular/core';
import { categoryData } from '@src/app/core/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isOpen: boolean = false;
  public categoryData;

  public constructor() {
    this.categoryData = categoryData;
  }

}
