import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEventsComponent } from './angular-events.component';

describe('AngularEventsComponent', () => {
  let component: AngularEventsComponent;
  let fixture: ComponentFixture<AngularEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
