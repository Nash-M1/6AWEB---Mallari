import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  photo?: string;
}

@Injectable({
  providedIn: 'root',
})
export class Products {
  private products: Product[] = [
    { id: 'P-101', name: 'Logitech Mouse', description: '6 Button Mechanical Mouse', price: 899, photo: 'mouse.jpg' },
    { id: 'P-102', name: 'JBL BT Speaker', description: 'Waterproof Radio 360 Surround', price: 1099, photo: 'speaker.jpg' },
    { id: 'P-103', name: 'Mechanical KeyBoard', description: 'Hot-swappable RGB Backlit', price: 2395, photo: 'keyboard.jpg' },
    { id: 'P-104', name: 'Oculus Meta', description: 'All-in-one Gaming Headset', price: 22450, photo: 'oculus.jpg' }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
