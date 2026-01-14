import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-join-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join-us.html',
  styleUrls: ['./join-us.css']
})
export class JoinUsComponent {
  formData = {
    firstname: '',
    lastname: '',
    email: '',
    institution: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for joining! We will contact you soon.');
  }
}
