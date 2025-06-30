import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { AotComponent } from './aot/aot.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, FooterComponent, AotComponent, ContentComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
