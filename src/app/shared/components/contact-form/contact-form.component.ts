import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApiService } from '../../services/api.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact-form',
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    MatProgressSpinner
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() form: string = '';

  apiService = inject(ApiService);

  contactData = {
    name: '',
    email: '',
    phone: '',
    text: '',
    processOptimization: false,
    digitalization: false,
    websiteDevelopment: false,
    websiteOptimization: false,
    consulting: false,
    referral: '',
    companySize: '',
    budget: '',
    privacy: false,
  }

  loading = false;
  showErrors = false;


  /**
   * Handles the submission of the contact form.
   *
   * Validates the form, displays errors if invalid, and initiates the submission process if valid.
   * Sets the loading state and sends the form data via a POST request.
   *
   * @param form - The NgForm instance representing the contact form.
   * @param data - An object containing the form data to be submitted.
   */
  submitForm(form: NgForm, data: object): void {
    if (form.invalid) {
      this.showErrors = true;
      return;
    }
    this.loading = true;
    this.sendPostRequest(data, form);
  }

  /**
   * Sends a POST request with the provided data to the contact email endpoint.
   * 
   * @param data - The data object to be sent in the POST request body.
   * @param form - The NgForm instance associated with the contact form.
   * 
   * On successful response:
   * - Resets the form.
   * - Sets loading to false.
   * - Hides error messages.
   * - Clears specific fields in the contactData object.
   * 
   * On error:
   * - Displays error messages.
   */
  sendPostRequest(data: object, form: NgForm): void {
    this.apiService.postRequest(this.apiService.contactEmailUrl, data).subscribe({
      next: (response) => {
        form.resetForm();
        this.loading = false;
        this.showErrors = false;
        setTimeout(() => {
          this.contactData.companySize = "";
          this.contactData.referral = "";
          this.contactData.budget = "";
        });
        console.log(this.contactData);
      },
      error: (error) => {
        this.showErrors = true;
      }
    })
  }

  /**
   * Returns an error message string based on the current state of the name in the form.
   *
   * @returns {string | null} An error message if the name is empty or too short,
   * or `null` if the name is valid.
   */
  errorMessageName(data: object): string | null {
    if (this.contactData.name.length === 0) return 'Geben Sie Ihren Namen ein.';
    if (this.contactData.name.length === 1) return 'Der Name muss mindestens 2 Zeichen lang sein.';
    return null;
  }

  /**
   * Returns an error message string based on the current state of the email in the form.
   *
   * @param {NgModel} input - The NgModel instance for the email input field.
   * @returns {string | null} An error message if the email is empty or invalid,
   * or `null` if the email is valid.
   */
  errorMessageEmail(input: NgModel, data: object): string | null {
    if (this.contactData.email.length === 0) return 'Geben Sie Ihre E-Mail-Adresse ein.';
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
  errorMessagePhone(input: NgModel, data: object): string | null {
    if (this.contactData.phone.length === 0) return 'Geben Sie Ihre Telefonnummer ein.';
    if (input.invalid) return 'Bitte geben Sie eine gültige Telefonnummer ein.';
    return null;
  }

  /**
   * Returns an error message string based on the current state of the message text in the form.
   *
   * @returns {string | null} An error message if the message text is empty or too short,
   * or `null` if the message text is valid.
   */
  errorMessageText(data: { text: string }): string | null {
    if (data.text.length === 0) return 'Geben Sie Ihre Nachricht ein.';
    if (data.text.length < 10) return 'Die Nachricht muss mindestens 10 Zeichen lang sein.';
    return null;
  }

  /**
   * Returns an error message if none of the interest options are selected.
   *
   * @param data - An object containing boolean flags for each interest option:
   *   - processOptimization: Whether process optimization is selected.
   *   - digitalization: Whether digitalization is selected.
   *   - websiteDevelopment: Whether website development is selected.
   *   - websiteOptimization: Whether website optimization is selected.
   *   - consulting: Whether consulting is selected.
   * @returns A German error message if no option is selected, otherwise `null`.
   */
  errorMessageInterest(data: {
    processOptimization: boolean,
    digitalization: boolean,
    websiteDevelopment: boolean,
    websiteOptimization: boolean,
    consulting: boolean,
  }): string | null {
    const isChecked = data.processOptimization == true || data.digitalization == true || data.websiteDevelopment == true || data.websiteOptimization == true || data.consulting == true;
    if (!isChecked) return 'Bitte wählen Sie mindestens eine Option aus.';
    return null;
  }
}
