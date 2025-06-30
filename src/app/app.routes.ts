import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaqComponent } from './faq/faq.component';
import { ProjectInquiryComponent } from './project-inquiry/project-inquiry.component';
import { ProcessImprovementComponent } from './process-improvement/process-improvement.component';
import { MarketingComponent } from './marketing/marketing.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'project-inquiry', component: ProjectInquiryComponent },
    { path: 'process-improvement', component: ProcessImprovementComponent },
    { path: 'marketing', component: MarketingComponent },
    { path: 'web-development', component: WebDevelopmentComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
