import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetGroupComponent } from './target-group.component';

describe('TargetGroupComponent', () => {
  let component: TargetGroupComponent;
  let fixture: ComponentFixture<TargetGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
