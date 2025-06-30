import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { AotComponent } from './aot/aot.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, FooterComponent, AotComponent, ContentComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
