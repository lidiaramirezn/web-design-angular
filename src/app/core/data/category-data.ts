import { Category } from "../models/category.model";


export const categoryData: Category[] = [
  {
    id: 'herramientas',
    title: 'Herramientas',
    link: '',
    img: './assets/category1.png',
    subcategory: [{
      title: 'Herramienta tipo 1',
      link: ''
    },
    {
      title: 'Herramienta tipo 2',
      link: ''
    },
    {
      title: 'Herramienta tipo 3',
      link: ''
    },
    {
      title: 'Herramienta tipo 4',
      link: ''
    }]
  },
  {
    id: 'materiales',
    title: 'Materiales',
    link: '',
    img: './assets/category2.png',
    subcategory: [{
      title: 'Materiales 1',
      link: ''
    },
    {
      title: 'Materiales 2',
      link: ''
    },
    {
      title: 'Materiales 3',
      link: ''
    },
    {
      title: 'Materiales 4',
      link: ''
    }]
  },
  {
    id: 'electrónica',
    title: 'Electrónica',
    link: '',
    img: './assets/category1.png',
    subcategory: [{
      title: 'Electrónica 1',
      link: ''
    },
    {
      title: 'Electrónica 2',
      link: ''
    },
    {
      title: 'Electrónica 3',
      link: ''
    },
    {
      title: 'Electrónica 4',
      link: ''
    }]
  },
  {
    id: 'seguridad-limpieza',
    title: 'Seguridad y Limpieza',
    link: '',
    img: './assets/category1.png',
    subcategory: [{
      title: 'Seguridad y Limpieza 1',
      link: ''
    },
    {
      title: 'Seguridad y Limpieza 2',
      link: ''
    }]
  }
];
