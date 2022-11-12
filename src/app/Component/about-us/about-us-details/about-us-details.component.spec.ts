import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUSDetailsComponent } from './about-us-details.component';

describe('AboutUSDetailsComponent', () => {
  let component: AboutUSDetailsComponent;
  let fixture: ComponentFixture<AboutUSDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUSDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUSDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
