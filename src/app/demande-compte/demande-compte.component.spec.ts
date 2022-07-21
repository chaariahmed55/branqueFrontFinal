import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCompteComponent } from './demande-compte.component';

describe('DemandeCompteComponent', () => {
  let component: DemandeCompteComponent;
  let fixture: ComponentFixture<DemandeCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
