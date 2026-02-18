import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css'
})
export class CustomFormComponent {
  departments = ['HR', 'IT', 'Finance', 'Marketing'];
  submitted = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      department: ['', Validators.required],
      position: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0), Validators.max(50)]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.submitted = true;
      console.log(this.form.value);
    }
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
