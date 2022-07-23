import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDemandeCreditComponent } from './detail-demande-credit.component';

describe('DetailDemandeCreditComponent', () => {
  let component: DetailDemandeCreditComponent;
  let fixture: ComponentFixture<DetailDemandeCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDemandeCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDemandeCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
