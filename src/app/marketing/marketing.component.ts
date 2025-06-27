import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";
import { AotComponent } from './aot/aot.component';
import { TargetGroupComponent } from "./target-group/target-group.component";
import { CampaignComponent } from "./campaign/campaign.component";
import { DigitalVisibilityComponent } from "./digital-visibility/digital-visibility.component";
import { MeasuringSuccessComponent } from "./measuring-success/measuring-success.component";

@Component({
  selector: 'app-marketing',
  imports: [
    HeaderComponent,
    FooterComponent,
    AotComponent,
    TargetGroupComponent,
    CampaignComponent,
    DigitalVisibilityComponent,
    MeasuringSuccessComponent
],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.scss'
})
export class MarketingComponent {

}
