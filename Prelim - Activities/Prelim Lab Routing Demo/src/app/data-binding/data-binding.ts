import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'Data Binding Demonstration';
  imageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/040/172/595/small/ai-generated-close-up-of-man-in-pinstripe-suit-with-red-tie-and-pocket-square-photo.jpeg';
  w = 150;
  h = 150;
  altText = 'close-up-of-man-in-pinstripe-suit-with-red-tie-and-pocket-square-photo';

  textColor = 'blue';

  isHighlighted = true;

  yourName = '';

  count=0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  //Interpolation
  studentName = 'Kenneth Nash Mallari';
  score = 95;
  //Property Binding
  imageUrl1 = 'https://img.freepik.com/free-photo/part-black-white-portrait-male-suit-dark-grey-background_613910-14160.jpg?semt=ais_hybrid&w=740&q=80';
  isDisabled = true;
  //Attribute Binding
  colSpanValue = 3;
  //Class Binding
  isPassing = true;
  //Style Binding
  boxColor = 'gold';
  boxSize = '150px';


}
