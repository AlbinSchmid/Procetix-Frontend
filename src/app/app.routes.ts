import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'faq', component: FaqComponent },
];
