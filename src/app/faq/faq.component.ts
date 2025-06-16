import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AotComponent } from './aot/aot.component';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-faq',
  imports: [
    HeaderComponent,
    FooterComponent,
    AotComponent,
    QuestionsComponent
],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
