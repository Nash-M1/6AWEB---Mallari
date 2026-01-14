import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-partners.html',
  styleUrls: ['./our-partners.css']
})
export class OurPartnersComponent {
  partners = [
    {
      company: 'Microsoft',
      trademark: 'assets/images/microsoft.png',
      sponsorship: 'Platinum',
      website: 'https://www.microsoft.com'
    },
    {
      company: 'Apple, Inc.',
      trademark: 'assets/images/apple.png',
      sponsorship: 'Gold',
      website: 'https://www.apple.com'
    },
    {
      company: 'Amazon',
      trademark: 'assets/images/amazon.png',
      sponsorship: 'Silver',
      website: 'https://www.amazon.com'
    },
    {
      company: 'Google, Inc.',
      trademark: 'assets/images/google.png',
      sponsorship: 'Bronze',
      website: 'https://www.google.com'
    }
  ];
}
