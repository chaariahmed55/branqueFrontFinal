import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCreditComponent } from './mes-credit.component';

describe('MesCreditComponent', () => {
  let component: MesCreditComponent;
  let fixture: ComponentFixture<MesCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
