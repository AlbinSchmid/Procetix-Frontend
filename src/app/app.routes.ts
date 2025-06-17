import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaqComponent } from './faq/faq.component';
import { ProjectInquiryComponent } from './project-inquiry/project-inquiry.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'project-inquiry', component: ProjectInquiryComponent },
];
