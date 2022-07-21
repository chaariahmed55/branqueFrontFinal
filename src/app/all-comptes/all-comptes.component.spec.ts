import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComptesComponent } from './all-comptes.component';

describe('AllComptesComponent', () => {
  let component: AllComptesComponent;
  let fixture: ComponentFixture<AllComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
