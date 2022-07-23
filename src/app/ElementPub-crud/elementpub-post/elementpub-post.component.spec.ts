import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementpubPostComponent } from './elementpub-post.component';

describe('ElementpubPostComponent', () => {
  let component: ElementpubPostComponent;
  let fixture: ComponentFixture<ElementpubPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementpubPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementpubPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
