import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDemandeCompteComponent } from './detail-demande-compte.component';

describe('DetailDemandeCompteComponent', () => {
  let component: DetailDemandeCompteComponent;
  let fixture: ComponentFixture<DetailDemandeCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDemandeCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDemandeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
