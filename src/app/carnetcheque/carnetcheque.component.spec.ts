import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetchequeComponent } from './carnetcheque.component';

describe('CarnetchequeComponent', () => {
  let component: CarnetchequeComponent;
  let fixture: ComponentFixture<CarnetchequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetchequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetchequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
