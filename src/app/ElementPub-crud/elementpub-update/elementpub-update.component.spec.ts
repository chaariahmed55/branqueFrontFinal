import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementpubUpdateComponent } from './elementpub-update.component';

describe('ElementpubUpdateComponent', () => {
  let component: ElementpubUpdateComponent;
  let fixture: ComponentFixture<ElementpubUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementpubUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementpubUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
