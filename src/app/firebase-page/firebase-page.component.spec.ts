import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasePageComponent } from './firebase-page.component';

describe('FirebasePageComponent', () => {
  let component: FirebasePageComponent;
  let fixture: ComponentFixture<FirebasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
