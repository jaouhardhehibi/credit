import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglerComponent } from './regler.component';

describe('ReglerComponent', () => {
  let component: ReglerComponent;
  let fixture: ComponentFixture<ReglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
