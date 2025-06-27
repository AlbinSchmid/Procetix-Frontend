import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyprocessImprovementComponent } from './why-process-improvement.component';

describe('WhyprocessImprovementComponent', () => {
  let component: WhyprocessImprovementComponent;
  let fixture: ComponentFixture<WhyprocessImprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyprocessImprovementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyprocessImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
