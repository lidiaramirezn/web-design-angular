import { Footer } from "../models";

export const footerData: Footer  = {
  networksList: {
    facebook: '',
    instagram: ''
  },
  footerList: [

    {
      title: 'Nosotros',
      active: false,
      submenu: [
        { type:'link', subtitle: 'Misión y valores', url: '#' },
        { type:'link', subtitle: 'Estándares de calidad', url: '#' }
      ]
    },
    {
      title: 'Contáctanos',
      active: false,
      submenu: [
        { type:'fono', icon: './assets/fono.svg', subtitle: 'Llámanos', text: '973585740', href: 'tel:973585740' },
        { type:'email', icon: './assets/email.svg', subtitle: 'Escríbenos', text: 'ventas@oshin.com.pe', href: 'mailto:ventas@oshin.com.pe' },
        { type:'text', icon: './assets/store.svg', subtitle: 'Visitanos', text: 'De Lunes a domingo de 9:00am a 5:00pm' }
      ]
    }
  ]
}
