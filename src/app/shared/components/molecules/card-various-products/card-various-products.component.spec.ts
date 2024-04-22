import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVariousProductsComponent } from './card-various-products.component';

describe('CardVariousProductsComponent', () => {
  let component: CardVariousProductsComponent;
  let fixture: ComponentFixture<CardVariousProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVariousProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVariousProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
