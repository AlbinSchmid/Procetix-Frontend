import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalVisibilityComponent } from './digital-visibility.component';

describe('DigitalVisibilityComponent', () => {
  let component: DigitalVisibilityComponent;
  let fixture: ComponentFixture<DigitalVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalVisibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
