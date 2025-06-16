import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-contact-form',
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  formData = {
    name: '',
    email: '',
    phone: '',
    text: '',
    privacy: false
  }

  showErrors = false;

  submitForm(form: NgForm) {
    if (form.invalid) {
      this.showErrors = true;
      return;
    }

    // Handle form submission
  }

  /**
   * Returns an error message string based on the current state of the name in the form.
   *
   * @returns {string | null} An error message if the name is empty or too short,
   * or `null` if the name is valid.
   */
  errorMessageName(): string | null {
    if (this.formData.name.length === 0) return 'Geben Sie Ihren Namen ein.';
    if (this.formData.name.length === 1) return 'Der Name muss mindestens 2 Zeichen lang sein.';
    return null;
  }

  /**
   * Returns an error message string based on the current state of the email in the form.
   *
   * @param {NgModel} input - The NgModel instance for the email input field.
   * @returns {string | null} An error message if the email is empty or invalid,
   * or `null` if the email is valid.
   */
  errorMessageEmail(input: NgModel): string | null {
    if (this.formData.email.length === 0) return 'Geben Sie Ihre E-Mail-Adresse ein.';
    if (input.invalid) return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    return null;
  }

  /**
   * Returns an error message string based on the current state of the phone number in the form.
   *
   * @param {NgModel} input - The NgModel instance for the phone input field.
   * @returns {string | null} An error message if the phone number is empty or invalid,
   * or `null` if the phone number is valid.
   */
  errorMessagePhone(input: NgModel): string | null {
    if (this.formData.phone.length === 0) return 'Geben Sie Ihre Telefonnummer ein.';
    if (input.invalid) return 'Bitte geben Sie eine gültige Telefonnummer ein.';
    return null;
  }

  /**
   * Returns an error message string based on the current state of the message text in the form.
   *
   * @returns {string | null} An error message if the message text is empty or too short,
   * or `null` if the message text is valid.
   */
  errorMessageText(): string | null {
    if (this.formData.text.length === 0) return 'Geben Sie Ihre Nachricht ein.';
    if (this.formData.text.length < 10) return 'Die Nachricht muss mindestens 10 Zeichen lang sein.';
    return null;
  }
}
