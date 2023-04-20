import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffingComponent } from './stuffing.component';

describe('StuffingComponent', () => {
  let component: StuffingComponent;
  let fixture: ComponentFixture<StuffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
