import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  template: `
    <div style="padding: 3rem 0;">

      <div style="margin-bottom: 5rem;">
        <h1 style="font-size: 4rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: -2px; line-height: 1;">
          {{ 'We are Pixel & Code' | uppercase }}
        </h1>
        <p style="font-size: 1.3rem; color: #666; max-width: 800px; line-height: 1.8; font-weight: 300;">
          A creative digital studio founded in 2018, specializing in crafting exceptional
          digital experiences for forward-thinking brands.
        </p>
      </div>

      <div class="minimal-grid" style="margin-bottom: 5rem;">

        <div style="background: #fafafa; padding: 3rem; border: 1px solid #e0e0e0;">
          <div style="font-size: 3rem; margin-bottom: 1.5rem;">🎯</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem; text-transform: uppercase;">Our Mission</h3>
          <p style="color: #666; line-height: 1.7;">
            To bridge the gap between creativity and technology, delivering digital
            solutions that not only look beautiful but perform exceptionally.
          </p>
        </div>

        <div style="background: #fafafa; padding: 3rem; border: 1px solid #e0e0e0;">
          <div style="font-size: 3rem; margin-bottom: 1.5rem;">⚡</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem; text-transform: uppercase;">Our Approach</h3>
          <p style="color: #666; line-height: 1.7;">
            Research-driven design combined with modern development practices.
            We believe in data-informed decisions and user-centered methodology.
          </p>
        </div>

        <div style="background: #fafafa; padding: 3rem; border: 1px solid #e0e0e0;">
          <div style="font-size: 3rem; margin-bottom: 1.5rem;">🚀</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem; text-transform: uppercase;">Our Values</h3>
          <p style="color: #666; line-height: 1.7;">
            Quality over quantity, collaboration over competition, and continuous
            learning. We're committed to excellence in everything we create.
          </p>
        </div>

      </div>

      <div style="background: #000; color: #fff; padding: 4rem; margin-bottom: 5rem;">
        <h2 style="font-size: 2.5rem; margin-bottom: 2rem; text-transform: uppercase; letter-spacing: -1px; color: #fff;">
          What We Do
        </h2>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem;">

          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1.5px; color: #007bff;">
              / Design Services
            </h4>
            <ul style="list-style: none; padding: 0; color: #ccc; line-height: 2;">
              <li>• Brand Identity & Logo Design</li>
              <li>• UI/UX Design & Prototyping</li>
              <li>• Web & Mobile Interface Design</li>
              <li>• Design Systems & Style Guides</li>
            </ul>
          </div>

          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1.5px; color: #007bff;">
              / Development Services
            </h4>
            <ul style="list-style: none; padding: 0; color: #ccc; line-height: 2;">
              <li>• Frontend Development (React, Angular, Vue)</li>
              <li>• Backend Development (Node.js, Python)</li>
              <li>• Mobile Apps (iOS, Android, React Native)</li>
              <li>• E-Commerce & CMS Solutions</li>
            </ul>
          </div>

          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1.5px; color: #007bff;">
              / Strategy & Marketing
            </h4>
            <ul style="list-style: none; padding: 0; color: #ccc; line-height: 2;">
              <li>• Digital Strategy Consulting</li>
              <li>• SEO & Content Marketing</li>
              <li>• Social Media Management</li>
              <li>• Analytics & Performance Tracking</li>
            </ul>
          </div>

          <div>
            <h4 style="font-size: 1rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1.5px; color: #007bff;">
              / Creative Services
            </h4>
            <ul style="list-style: none; padding: 0; color: #ccc; line-height: 2;">
              <li>• Motion Graphics & Animation</li>
              <li>• Photography & Videography</li>
              <li>• Copywriting & Content Creation</li>
              <li>• Brand Storytelling</li>
            </ul>
          </div>

        </div>
      </div>

      <div style="background: #fafafa; padding: 4rem; border: 1px solid #e0e0e0; text-align: center;">
        <div style="max-width: 700px; margin: 0 auto;">
          <h3 style="font-size: 1.5rem; margin-bottom: 2rem; text-transform: uppercase;">
            Technology Stack
          </h3>
          <p style="color: #666; margin-bottom: 2rem; line-height: 1.8;">
            This portfolio is built with Angular 18, demonstrating our expertise in modern
            web development. We utilize TypeScript, RxJS for reactive programming, and
            follow component-based architecture principles.
          </p>

          <div style="display: inline-block; background: #fff; padding: 2rem; border: 1px solid #e0e0e0; text-align: left;">
            <div style="margin-bottom: 1rem;">
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #999;">Current Date & Time</span>
            </div>
            <div style="font-size: 1.3rem; font-weight: 600; font-family: 'Space Grotesk', sans-serif;">
              {{ today | date:'EEEE, MMMM d, y' }}
            </div>
            <div style="font-size: 1.1rem; color: #666; margin-top: 0.5rem;">
              {{ today | date:'h:mm a' }}
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 5rem; text-align: center;">
        <h3 style="font-size: 2rem; margin-bottom: 1.5rem; text-transform: uppercase;">
          Ready to Start Your Project?
        </h3>
        <p style="color: #666; margin-bottom: 2rem; font-size: 1.1rem;">
          Let's discuss how we can help bring your vision to life.
        </p>
        <button style="padding: 1.5rem 3rem; font-size: 1rem;">
          Get in Touch →
        </button>
      </div>

    </div>
  `,
  styles: [`
    @media (max-width: 768px) {
      div[style*="grid-template-columns: repeat(2, 1fr)"] {
        grid-template-columns: 1fr !important;
      }
    }
  `]
})
export class AboutComponent {
  today = new Date();
}
