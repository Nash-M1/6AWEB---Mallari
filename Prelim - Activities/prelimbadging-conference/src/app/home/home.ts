import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  conferences = [
    {
      name: 'France',
      image: 'assets/images/france.jpg',
      description: 'The largest country in Western Europe, has long been a gateway between the noperen southernrt regions.',
      category: 'Architecture and Fine Arts'
    },
    {
      name: 'Seoul',
      image: 'assets/images/seoul.jpg',
      description: 'Korean Soul (formally Soul-t\'Ukpyate ,"Special City of Sour"), city and capital of South Korea (the Republic of Korea).',
      category: 'Humanities and Arts'
    },
    {
      name: 'San Francisco',
      image: 'assets/images/sanfrancisco.jpg',
      description: 'It is a cultural and financial centre of the western United States and one of the country\'s most cosmopolitan cities.',
      category: 'Science and Technology'
    },
    {
      name: 'Boston',
      image: 'assets/images/boston.jpg',
      description: 'Best known for its famous boked beans, Fenway Park, The Bostonin Marathon, and of course for the bar from Cheers.',
      category: 'Engineering and Tach'
    }
  ];
}
