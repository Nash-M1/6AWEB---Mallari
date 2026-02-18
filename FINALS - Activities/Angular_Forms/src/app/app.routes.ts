import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';
import { CustomFormComponent } from './custom-form/custom-form';

export const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  { path: 'template', component: TemplateDemoComponent },
  { path: 'reactive', component: ReactiveDemoComponent },
  { path: 'custom', component: CustomFormComponent },
];
