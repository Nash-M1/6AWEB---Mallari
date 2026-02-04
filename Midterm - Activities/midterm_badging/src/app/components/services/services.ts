import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Post } from '../../services/data';
import { combineLatest, Observable, BehaviorSubject, map } from 'rxjs';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  template: `
    <div style="padding: 3rem 0;">
      <div style="margin-bottom: 4rem;">
        <h1 style="font-size: 3.5rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: -2px;">
          Our Services
        </h1>
        <p style="font-size: 1.1rem; color: #666; max-width: 700px; line-height: 1.8;">
          From concept to execution, we deliver comprehensive digital solutions tailored to your business needs.
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <input
          type="text"
          class="search-input"
          placeholder="Search services (e.g., 'Web Design', 'Branding')..."
          [(ngModel)]="searchTerm"
          (ngModelChange)="onSearch($event)"
        >
      </div>

      <div *ngIf="filteredPosts$ | async as posts; else loading" class="minimal-grid">
        <div *ngFor="let post of posts" class="minimal-card">
          <span class="project-badge">SERVICE {{ post.id }}</span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.body | truncate:120 }}</p>
          <button (click)="learnMore(post.title)" style="width: 100%; margin-top: 1rem;">
            Learn More →
          </button>
        </div>
      </div>

      <ng-template #loading>
        <div style="text-align: center; padding: 5rem 0;">
          <div class="loading-spinner"></div>
          <p style="margin-top: 1.5rem; color: #666; font-size: 1.1rem;">Loading services...</p>
        </div>
      </ng-template>
    </div>
  `
})
export class ServicesComponent {
  private dataService = inject(DataService);
  searchTerm = '';
  private searchSubject = new BehaviorSubject<string>('');

  private serviceOfferings = [
    { title: "Web Design & Development", body: "Custom website design and development using modern frameworks. Responsive, accessible, and optimized for performance. From landing pages to complex web applications." },
    { title: "Brand Identity Design", body: "Complete brand identity systems including logo design, typography, color palettes, and brand guidelines. Create a memorable and consistent visual presence." },
    { title: "UX/UI Design", body: "User-centered design process from research to prototyping. Create intuitive interfaces that delight users and drive conversions through thoughtful interaction design." },
    { title: "Mobile App Development", body: "Native and cross-platform mobile applications for iOS and Android. From concept to App Store deployment with ongoing maintenance and updates." },
    { title: "E-Commerce Solutions", body: "Full-service e-commerce development with payment integration, inventory management, and analytics. Shopify, WooCommerce, or custom solutions." },
    { title: "Digital Marketing", body: "SEO optimization, content strategy, social media management, and paid advertising campaigns. Data-driven approach to grow your online presence." },
    { title: "Motion Graphics", body: "Animated explainer videos, product demos, and brand storytelling through motion design. Engaging visual content for social media and marketing." },
    { title: "Photography & Videography", body: "Professional product photography, corporate headshots, and promotional video content. High-quality visual assets for your marketing needs." },
    { title: "Consulting & Strategy", body: "Digital transformation consulting, technology stack recommendations, and business process optimization. Strategic planning for growth." },
    { title: "Maintenance & Support", body: "Ongoing website maintenance, security updates, performance monitoring, and technical support. Keep your digital assets running smoothly 24/7." }
  ];

  filteredPosts$: Observable<Post[]> = combineLatest([
    this.dataService.getPosts().pipe(
      map(posts => posts.map((post, index) => {
        const service = this.serviceOfferings[index % this.serviceOfferings.length];
        return { ...post, title: service.title, body: service.body };
      }))
    ),
    this.searchSubject
  ]).pipe(
    map(([posts, term]) =>
      posts.filter(p =>
        p.title.toLowerCase().includes(term.toLowerCase()) ||
        p.body.toLowerCase().includes(term.toLowerCase())
      )
    )
  );

  onSearch(term: string) {
    this.searchSubject.next(term);
  }

  learnMore(title: string) {
    alert(`Interested in: "${title}"\n\nContact us to discuss your project!`);
  }
}
