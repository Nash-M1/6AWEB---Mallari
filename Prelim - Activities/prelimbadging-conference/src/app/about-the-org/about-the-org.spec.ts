import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheOrg } from './about-the-org';

describe('AboutTheOrg', () => {
  let component: AboutTheOrg;
  let fixture: ComponentFixture<AboutTheOrg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTheOrg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTheOrg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
