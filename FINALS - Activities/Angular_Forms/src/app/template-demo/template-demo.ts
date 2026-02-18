import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemoComponent {
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  comments = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
