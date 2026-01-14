import { Component } from '@angular/core';

@Component({
  selector: 'app-about-the-org',
  standalone: true,
  imports: [],
  templateUrl: './about-the-org.html',
  styleUrls: ['./about-the-org.css']
})
export class AboutTheOrgComponent {
  // Event binding method
  getFreeGift() {
    alert('🎁 Congratulations! Your FREE gift is on its way! Check your email for details.');
    console.log('Free gift claimed!');
  }

  learnMore() {
    alert('📚 Thank you for your interest! Our team will contact you soon with more information.');
    console.log('Learn more clicked!');
  }
}
