import { Component } from '@angular/core';
import { EventRegisterComponent } from './event-register/event-register';

@Component({
  selector: 'app-root',
  imports: [EventRegisterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}