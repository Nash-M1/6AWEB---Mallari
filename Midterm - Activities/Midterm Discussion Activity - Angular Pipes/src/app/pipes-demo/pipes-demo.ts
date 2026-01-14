import { Component } from '@angular/core';
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, SlicePipe, UpperCasePipe, PercentPipe, TitleCasePipe, CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    SlicePipe,
    DecimalPipe,
    AsyncPipe,
    PercentPipe,
    CommonModule,
    TitleCasePipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrls: ['./pipes-demo.css'],
})
export class PipesDemo {
  presentDate = new Date();
  price: number = 20000;

  Fruits = [" Banana", " Orange", " Rambutan", " Watermelon", " Papaya", "Mango"];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  time$ = interval(1000)
    .pipe(map(val => new Date()));

  sampleText = "hello angular";
}