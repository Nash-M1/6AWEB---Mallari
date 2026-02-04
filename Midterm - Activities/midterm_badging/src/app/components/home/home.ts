import { Component, inject } from '@angular/core';
import { AsyncPipe, SlicePipe, CommonModule } from '@angular/common';
import { DataService, Post } from '../../services/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, SlicePipe, CommonModule],
  template: `
    <div style="padding: 3rem 0;">
      <div style="margin-bottom: 4rem;">
        <h1 style="font-size: 4rem; margin-bottom: 1.5rem; font-family: 'Space Grotesk', sans-serif; letter-spacing: -2px; text-transform: uppercase; line-height: 1;">
          We craft digital<br>experiences
        </h1>
        <p style="font-size: 1.2rem; color: #666; max-width: 600px; line-height: 1.8; font-weight: 300;">
          A creative studio specializing in web design, branding, and digital strategy.
          We transform ideas into memorable digital products.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 5rem;">
        <div style="background: #fafafa; padding: 2.5rem; border: 1px solid #e0e0e0; cursor: pointer; transition: all 0.3s ease;" (click)="viewServices()">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎨</div>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.8rem; text-transform: uppercase;">Design</h3>
          <p style="color: #666; font-size: 0.9rem;">Beautiful interfaces that users love</p>
        </div>

        <div style="background: #fafafa; padding: 2.5rem; border: 1px solid #e0e0e0; cursor: pointer; transition: all 0.3s ease;" (click)="viewServices()">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">💻</div>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.8rem; text-transform: uppercase;">Development</h3>
          <p style="color: #666; font-size: 0.9rem;">Robust code that scales</p>
        </div>

        <div style="background: #fafafa; padding: 2.5rem; border: 1px solid #e0e0e0; cursor: pointer; transition: all 0.3s ease;" (click)="viewServices()">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🚀</div>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.8rem; text-transform: uppercase;">Strategy</h3>
          <p style="color: #666; font-size: 0.9rem;">Data-driven growth solutions</p>
        </div>
      </div>

      <div style="border-top: 1px solid #e0e0e0; padding-top: 3rem;">
        <h2 style="font-size: 2.5rem; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: -1px;">
          Latest Projects
        </h2>

        <div *ngIf="posts$ | async as posts; else loading" class="minimal-grid">
          <div *ngFor="let post of posts" class="minimal-card">
            <span class="project-badge">PROJECT #{{ post.id }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <span class="card-meta">View Case Study</span>
          </div>
        </div>

        <ng-template #loading>
          <div style="text-align: center; padding: 4rem 0;">
            <div class="loading-spinner"></div>
            <p style="margin-top: 1.5rem; color: #666;">Loading projects...</p>
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [`
    div[style*="grid-template-columns: repeat(3, 1fr)"] > div:hover {
      transform: translateY(-5px);
      border-color: #007bff;
    }
  `]
})
export class HomeComponent {
  private dataService = inject(DataService);

  posts$: Observable<Post[]> = this.dataService.getPosts().pipe(
    map(posts => {
      const latest3 = posts.slice(0, 3);

      latest3[0].title = "E-Commerce Redesign";
      latest3[0].body = "Complete visual overhaul of an online fashion retailer. Increased conversion rates by 45% through improved UX and streamlined checkout process.";

      latest3[1].title = "Brand Identity System";
      latest3[1].body = "Developed comprehensive brand guidelines for a fintech startup. Created logo, typography system, and visual language across all touchpoints.";

      latest3[2].title = "Mobile App Development";
      latest3[2].body = "Built a cross-platform fitness tracking app with real-time sync. React Native implementation with custom animations and gamification features.";

      return latest3;
    })
  );

  viewServices() {
    alert('Navigating to services page...');
  }
}
