import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRdvComponent } from './agent-rdv.component';

describe('AgentRdvComponent', () => {
  let component: AgentRdvComponent;
  let fixture: ComponentFixture<AgentRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
