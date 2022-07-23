import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDemandeCreditComponent } from './mes-demande-credit.component';

describe('MesDemandeCreditComponent', () => {
  let component: MesDemandeCreditComponent;
  let fixture: ComponentFixture<MesDemandeCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDemandeCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDemandeCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
