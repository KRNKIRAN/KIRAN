import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationCreationComponent } from './quotation-creation.component';

describe('QuotationCreationComponent', () => {
  let component: QuotationCreationComponent;
  let fixture: ComponentFixture<QuotationCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
