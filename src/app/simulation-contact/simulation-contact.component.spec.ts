import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationContactComponent } from './simulation-contact.component';

describe('SimulationContactComponent', () => {
  let component: SimulationContactComponent;
  let fixture: ComponentFixture<SimulationContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulationContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
