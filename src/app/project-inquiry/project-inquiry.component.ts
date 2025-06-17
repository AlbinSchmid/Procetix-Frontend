import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ContactFormComponent } from "../shared/components/contact-form/contact-form.component";

@Component({
  selector: 'app-project-inquiry',
  imports: [
    HeaderComponent,
    FooterComponent,
    ContactFormComponent
],
  templateUrl: './project-inquiry.component.html',
  styleUrl: './project-inquiry.component.scss'
})
export class ProjectInquiryComponent {

}
