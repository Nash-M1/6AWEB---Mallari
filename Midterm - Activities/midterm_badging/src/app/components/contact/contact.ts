import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe, JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, JsonPipe, CommonModule],
  template: `
    <div style="padding: 3rem 0;">

      <div *ngIf="isSubmitted" style="max-width: 700px; margin: 0 auto; text-align: center; padding: 5rem 3rem; background: #fafafa; border: 1px solid #e0e0e0;">
        <div style="font-size: 5rem; margin-bottom: 2rem;">✓</div>
        <h2 style="font-size: 2.5rem; margin-bottom: 1rem; text-transform: uppercase;">Message Sent</h2>
        <p style="font-size: 1.1rem; color: #666; margin-bottom: 2rem;">
          Thank you for reaching out! We'll get back to you within 24 hours.
        </p>
        <p style="font-size: 0.9rem; color: #999; margin-bottom: 2rem;">
          Reference: <strong style="color: #000;">#{{ generateRef() }}</strong>
        </p>
        <button (click)="isSubmitted = false">Send Another Message</button>
      </div>

      <div *ngIf="!isSubmitted">
        <div style="margin-bottom: 4rem;">
          <h1 style="font-size: 3.5rem; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: -2px;">
            Let's Work Together
          </h1>
          <p style="font-size: 1.1rem; color: #666; max-width: 700px; line-height: 1.8;">
            Have a project in mind? Fill out the form below and we'll get back to you with a free consultation.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem;">

          <div>
            <form style="background: #fafafa; padding: 3rem; border: 1px solid #e0e0e0;">

              <div style="margin-bottom: 2rem;">
                <label style="display: block; margin-bottom: 0.8rem; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1.5px;">
                  Your Name *
                </label>
                <input
                  [(ngModel)]="name"
                  name="name"
                  placeholder="John Doe"
                  style="padding: 1.2rem; border: 1px solid #e0e0e0;">
              </div>

              <div style="margin-bottom: 2rem;">
                <label style="display: block; margin-bottom: 0.8rem; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1.5px;">
                  Email Address *
                </label>
                <input
                  [(ngModel)]="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  style="padding: 1.2rem; border: 1px solid #e0e0e0;">
              </div>

              <div style="margin-bottom: 2rem;">
                <label style="display: block; margin-bottom: 0.8rem; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1.5px;">
                  Service Interested In
                </label>
                <select
                  [(ngModel)]="service"
                  name="service"
                  style="padding: 1.2rem; border: 1px solid #e0e0e0;">
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>Mobile App</option>
                  <option>Digital Marketing</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div style="margin-bottom: 2rem;">
                <label style="display: block; margin-bottom: 0.8rem; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1.5px;">
                  Project Details *
                </label>
                <textarea
                  [(ngModel)]="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project..."
                  style="padding: 1.2rem; border: 1px solid #e0e0e0; resize: vertical;"></textarea>
              </div>

              <button type="button" (click)="submit()" style="width: 100%; padding: 1.5rem; font-size: 0.9rem;">
                Send Message →
              </button>

            </form>
          </div>

          <div style="display: flex; flex-direction: column; gap: 2rem;">

            <div style="background: #fafafa; padding: 2.5rem; border: 1px solid #e0e0e0;">
              <h3 style="font-size: 1.2rem; margin-bottom: 1.5rem; text-transform: uppercase;">Message Preview</h3>

              <div style="margin-bottom: 1rem;">
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 0.5rem;">Name</div>
                <div style="font-weight: 600; color: #000;">{{ name | uppercase }}</div>
              </div>

              <div style="margin-bottom: 1rem;">
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 0.5rem;">Email</div>
                <div style="font-weight: 600; color: #000;">{{ email }}</div>
              </div>

              <div style="margin-bottom: 1rem;">
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 0.5rem;">Service</div>
                <div style="font-weight: 600; color: #000;">{{ service }}</div>
              </div>

              <div>
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 0.5rem;">Message</div>
                <div style="color: #666; line-height: 1.6; padding: 1rem; background: #fff; border-left: 3px solid #007bff;">
                  {{ message || 'No message yet...' }}
                </div>
              </div>
            </div>

            <div style="background: #000; color: #fff; padding: 2.5rem; border: 1px solid #000;">
              <h3 style="font-size: 1.2rem; margin-bottom: 1.5rem; text-transform: uppercase; color: #fff;">Contact Info</h3>

              <div style="margin-bottom: 1.5rem;">
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 0.5rem;">Email</div>
                <div style="color: #fff;">nashmallari@studio@gmail.com</div>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 0.5rem;">Phone</div>
                <div style="color: #fff;">+1 (555) 123-4567</div>
              </div>

              <div>
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 0.5rem;">Location</div>
                <div style="color: #fff;">San Francisco, CA</div>
              </div>
            </div>

            <div style="background: #fafafa; padding: 2.5rem; border: 1px solid #e0e0e0;">
              <h4 style="font-size: 0.9rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Data Object</h4>
              <pre style="font-size: 0.75rem; color: #666; overflow-x: auto; line-height: 1.6;">{{ {name: name, email: email, service: service, message: message} | json }}</pre>
            </div>

          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    @media (max-width: 968px) {
      div[style*="grid-template-columns: 1.5fr 1fr"] {
        grid-template-columns: 1fr !important;
      }
    }
  `]
})
export class ContactComponent {
  name = '';
  email = '';
  service = 'Web Design';
  message = '';
  isSubmitted = false;

  submit() {
    if(this.name && this.email && this.message) {
      this.isSubmitted = true;
    } else {
      alert('Please fill in all required fields (Name, Email, and Project Details)');
    }
  }

  generateRef() {
    return 'PXL' + Math.floor(100000 + Math.random() * 900000);
  }
}
