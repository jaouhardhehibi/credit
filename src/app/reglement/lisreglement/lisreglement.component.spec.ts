import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisreglementComponent } from './lisreglement.component';

describe('LisreglementComponent', () => {
  let component: LisreglementComponent;
  let fixture: ComponentFixture<LisreglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisreglementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisreglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
