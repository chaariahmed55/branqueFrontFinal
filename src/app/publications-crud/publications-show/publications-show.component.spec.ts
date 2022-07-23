import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsShowComponent } from './publications-show.component';

describe('PublicationsShowComponent', () => {
  let component: PublicationsShowComponent;
  let fixture: ComponentFixture<PublicationsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
