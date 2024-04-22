import { ProductList } from "../models";

export const dataVariousProduct: ProductList[] = [
  {
    category: 'Nuevos ingresos',
    linkCategory: '',
    products: [
      {
        img: './assets/tools.png',
        name: 'Producto 1 Ezy Touch Tina Abcdef',
        price: 'S/299.90',
      },
      {
        img: './assets/tools2.png',
        name: 'Producto 2 Ezy',
        price: 'S/299.90',
        offerPrice: 'S/269.90'
      },
      {
        img: './assets/tools3.png',
        name: 'Producto 3 Ezy Touch',
        price: 'S/299.90'
      }
    ]
  },
  {
    category: 'Más solicitados',
    products: [
      {
        img: './assets/tools3.png',
        name: 'Producto 1 Ezy Touch Tina',
        price: 'S/168.00',
        offerPrice: 'S/134.00'
      },
      {
        img: './assets/tools.png',
        name: 'Producto 2',
        price: 'S/299.90'
      },
      {
        img: './assets/tools.png',
        name: 'Producto 3',
        price: 'S/299.90'
      }
    ]
  },
  {
    category: 'Ofertas y promociones',
    products: [
      {
        img: './assets/tools.png',
        name: 'Producto 1 Ezy Touch Tina abcdef',
        price: 'S/299.90'
      },
      {
        img: './assets/tools.png',
        name: 'Producto 2',
        price: 'S/299.90'
      },
      {
        img: './assets/tools.png',
        name: 'Producto 3',
        price: 'S/299.90'
      }
    ]
  }
]
