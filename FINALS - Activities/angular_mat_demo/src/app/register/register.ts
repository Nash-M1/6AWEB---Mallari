import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-register',
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
    MatIconModule,       // ADD
    MatTooltipModule,    // ADD
    MatProgressBarModule // ADD
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  submitted = false;
  isSubmitting = false;

  formData: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(1),
    agreeToTerms: new FormControl(false)
  });

  constructor(private snackBar: MatSnackBar) {}

  onClickSubmit() {
    this.submitted = true;
    if (this.formData.valid) {
      this.isSubmitting = true;
      console.log(this.formData.value);
      this.snackBar.open('Registration Successful!', 'Close', { duration: 3000 });
      setTimeout(() => this.isSubmitting = false, 3000);
    }
  }
}