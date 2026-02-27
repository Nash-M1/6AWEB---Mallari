import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

// Custom Validators
function alphanumericStartsWithLetter(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const valid = /^[a-zA-Z][a-zA-Z0-9]{7,}$/.test(value);
  return valid ? null : { invalidPassword: true };
}

function birthDateValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const year = new Date(value).getFullYear();
  return year <= 2006 ? null : { tooYoung: true };
}

@Component({
  selector: 'app-event-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './event-register.html',
  styleUrl: './event-register.css'
})
export class EventRegisterComponent {
  submitted = false;
  isSubmitting = false;
  isDarkMode = false;

  formData: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, alphanumericStartsWithLetter]),
    birthDate: new FormControl('', [Validators.required, birthDateValidator]),
    phone: new FormControl('', [Validators.required]),
    eventCategory: new FormControl('', [Validators.required]),
    tshirtSize: new FormControl(''),
    agreeToTerms: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(private snackBar: MatSnackBar) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  onClickSubmit() {
    this.submitted = true;
    if (this.formData.valid) {
      this.isSubmitting = true;
      console.log(this.formData.value);
      this.snackBar.open('Registration Successful! See you at the event!', 'Close', { duration: 3000 });
      setTimeout(() => this.isSubmitting = false, 3000);
    }
  }
}