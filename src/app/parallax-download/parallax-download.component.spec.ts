import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxDownloadComponent } from './parallax-download.component';

describe('ParallaxDownloadComponent', () => {
  let component: ParallaxDownloadComponent;
  let fixture: ComponentFixture<ParallaxDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
