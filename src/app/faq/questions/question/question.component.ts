import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
@Input() question = {
  question: '',
  answer: ''
};
}
