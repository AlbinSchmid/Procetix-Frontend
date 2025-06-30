import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from "../../shared/components/form/form.component";

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, FooterComponent, FormsModule, ContactFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
}
