import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringSuccessComponent } from './measuring-success.component';

describe('MeasuringSuccessComponent', () => {
  let component: MeasuringSuccessComponent;
  let fixture: ComponentFixture<MeasuringSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasuringSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasuringSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
