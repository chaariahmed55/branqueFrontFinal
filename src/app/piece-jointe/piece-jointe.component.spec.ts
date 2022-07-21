import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceJointeComponent } from './piece-jointe.component';

describe('PieceJointeComponent', () => {
  let component: PieceJointeComponent;
  let fixture: ComponentFixture<PieceJointeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceJointeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceJointeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
