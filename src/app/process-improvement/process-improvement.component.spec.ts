import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessImprovementComponent } from './process-improvement.component';

describe('ProcessImprovementComponent', () => {
  let component: ProcessImprovementComponent;
  let fixture: ComponentFixture<ProcessImprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessImprovementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
