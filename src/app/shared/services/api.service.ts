import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);
  API_URL = 'http://localhost:8000/api';

  contactEmailUrl = `${this.API_URL}/contact-email/`;

  /**
   * Sends a POST request to the specified URL with the provided data.
   *
   * @param url - The endpoint URL to which the POST request will be sent.
   * @param data - The payload to be sent in the body of the POST request.
   * @returns An Observable emitting the response from the server.
   */
  postRequest(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }
}
