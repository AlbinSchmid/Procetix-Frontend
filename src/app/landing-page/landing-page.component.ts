import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { AotComponent } from './aot/aot.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from "./products/products.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    MatButtonModule,
    AotComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
