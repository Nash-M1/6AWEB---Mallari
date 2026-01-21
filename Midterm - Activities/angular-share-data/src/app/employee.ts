import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Products, Product } from './products';

interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  photo?: string;
  hireDate?: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('angular-share-data');

  public employees: Employee[] = [
    {
      id: 101,
      firstname: 'Joseph',
      lastname: 'Dizon',
      email: 'jdizon@hau.edu.ph',
      photo: 'joseph.jpg',
      hireDate: new Date('2020-03-15')
    },
    {
      id: 102,
      firstname: 'James',
      lastname: 'Atienza',
      email: 'jatienza@hau.edu.ph',
      photo: 'james.jpg',
      hireDate: new Date('2019-08-22')
    },
    {
      id: 103,
      firstname: 'John',
      lastname: 'Cena',
      email: 'jcena@hau.edu.ph',
      photo: 'john.jpg',
      hireDate: new Date('2021-01-10')
    },
    {
      id: 104,
      firstname: 'Robert',
      lastname: 'Quintana',
      email: 'rquintana@hau.edu.ph',
      photo: 'robert.jpg',
      hireDate: new Date('2018-11-05')
    },
    {
      id: 105,
      firstname: 'Kenneth Nash',
      lastname: 'Mallari',
      email: 'kpmallari@hau.edu.ph',
      photo: 'kenneth.jpg',
      hireDate: new Date('2022-06-18')
    },
  ];

  public products: Product[] = [];

  constructor(private _productsService: Products) {}

  ngOnInit(): void {
    this.products = this._productsService.getProducts();
  }

  getInitials(firstname: string, lastname: string): string {
    return `${firstname.charAt(0)}${lastname.charAt(0)}`;
  }

  getProductInitial(name: string): string {
    return name.charAt(0);
  }
}
