import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialRedComponent } from './social-red.component';

describe('SocialRedComponent', () => {
  let component: SocialRedComponent;
  let fixture: ComponentFixture<SocialRedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialRedComponent]
    });
    fixture = TestBed.createComponent(SocialRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
