import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementpubDetailComponent } from './elementpub-detail.component';

describe('ElementpubDetailComponent', () => {
  let component: ElementpubDetailComponent;
  let fixture: ComponentFixture<ElementpubDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementpubDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementpubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
