import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { NgFor } from '@angular/common';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];
  
  constructor(private httpClient: Httpclient) {
    console.log('App component created');
  }

  ngOnInit() {
    console.log('ngOnInit called - fetching users...');
    this.httpClient.getUsersRemotely().subscribe({
      next: (data) => {
        console.log('Data received from API:', data);
        this.httpusers = data.slice(0, 5);
        console.log('Users after slice:', this.httpusers);
      },
      error: (error) => {
        console.error('ERROR fetching users:', error);
      }
    });
  }
}