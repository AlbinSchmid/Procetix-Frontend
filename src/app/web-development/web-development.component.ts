import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { DesignComponent } from "./design/design.component";
import { OptimizeComponent } from "./optimize/optimize.component";
import { SecurityComponent } from "./security/security.component";
import { DevelopmentComponent } from "./development/development.component";
import { AotComponent } from './aot/aot.component';

@Component({
  selector: 'app-web-development',
  imports: [HeaderComponent, FooterComponent, DesignComponent, OptimizeComponent, SecurityComponent, DevelopmentComponent, AotComponent],
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.scss'
})
export class WebDevelopmentComponent {

}
