import { Component } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/form/form.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [
    ContactFormComponent,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  open_days = [
    { day: 'Montag:', time: '08:00 – 18:00' },
    { day: 'Dienstag:', time: '08:00 – 18:00' },
    { day: 'Mittwoch:', time: '08:00 – 18:00' },
    { day: 'Donnerstag:', time: '08:00 – 18:00' },
    { day: 'Freitag:', time: '08:00 – 18:00' },
    { day: 'Samstag:', time: '08:00 – 12:00' }
  ];
}
