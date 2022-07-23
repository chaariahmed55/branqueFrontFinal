import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementpublistComponent } from './elementpublist.component';

describe('ElementpublistComponent', () => {
  let component: ElementpublistComponent;
  let fixture: ComponentFixture<ElementpublistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementpublistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementpublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
