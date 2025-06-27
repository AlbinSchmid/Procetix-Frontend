import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { AotComponent } from './aot/aot.component';
import { WhyprocessImprovementComponent } from "./why-process-improvement/why-process-improvement.component";
import { OurServicesComponent } from './our-services/our-services.component';
import { AdvantagesComponent } from "./advantages/advantages.component";

@Component({
  selector: 'app-process-improvement',
  imports: [
    HeaderComponent,
    FooterComponent,
    AotComponent,
    WhyprocessImprovementComponent,
    OurServicesComponent,
    AdvantagesComponent
],
  templateUrl: './process-improvement.component.html',
  styleUrl: './process-improvement.component.scss'
})
export class ProcessImprovementComponent {

}
