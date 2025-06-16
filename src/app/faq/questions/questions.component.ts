import { Component } from '@angular/core';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-questions',
  imports: [
    QuestionComponent
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  questions = [
    {
      question: 'Was sind Prozessoptimierungslösungen?',
      answer: 'Prozessoptimierungslösungen zielen darauf ab, die Effizienz und Effektivität von Geschäftsabläufen zu steigern. Bei Procetix analysieren wir bestehende Prozesse, identifizieren Engpässe und entwickeln maßgeschneiderte Strategien zur Verbesserung. Diese Lösungen sind ideal für kleine und mittlere Unternehmen, die ihre Abläufe rationalisieren und Kosten senken möchten. Unser Ansatz beinhaltet die Anwendung bewährter Methoden und innovativer Technologien, um Ihre Geschäftsprozesse zu optimieren. So können Sie nicht nur Zeit und Ressourcen sparen, sondern auch die Qualität Ihrer Dienstleistungen verbessern und die Zufriedenheit Ihrer Kunden erhöhen.'
    },
    {
      question: 'Was umfasst die digitale Lösung von Procetix?',
      answer: 'Unsere digitalen Lösungen helfen Unternehmen, ihre Online-Präsenz zu stärken und moderne Technologien effektiv zu nutzen. Procetix bietet eine Vielzahl von Dienstleistungen an, darunter die Erstellung von Websites, App-Entwicklung und digitale Marketingstrategien. Wir arbeiten eng mit unseren Kunden zusammen, um maßgeschneiderte Lösungen zu entwickeln, die auf ihre spezifischen Bedürfnisse zugeschnitten sind. Unsere Experten nutzen die neuesten Trends und Technologien, um Ihre Marke digital sichtbar zu machen und Ihre Zielgruppe effektiv zu erreichen. Mit unseren digitalen Lösungen können Sie Ihre Geschäftsziele schneller und effizienter erreichen.'
    },
    {
      question: 'Wie funktioniert die Webseitenerstellung bei Procetix?',
      answer: 'Die Webseitenerstellung bei Procetix folgt einem strukturierten Prozess, der sicherstellt, dass Ihre Website sowohl ansprechend als auch funktional ist. Zunächst erfassen wir Ihre Anforderungen und Ziele, um ein maßgeschneidertes Konzept zu entwickeln. Anschließend gestalten unsere Designer eine benutzerfreundliche Oberfläche, während unsere Entwickler die technische Umsetzung übernehmen. Wir integrieren SEO-Optimierung, damit Ihre Seite besser gefunden wird. Nach der Fertigstellung bieten wir Schulungen an, damit Sie Ihre Website selbst verwalten können. Unser Ziel ist es, eine Website zu erstellen, die nicht nur gut aussieht, sondern Ihnen auch hilft, Ihre Geschäftsziele zu erreichen.'
    }
  ]
}
