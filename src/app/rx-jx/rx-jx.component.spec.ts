import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJXComponent } from './rx-jx.component';

describe('RxJXComponent', () => {
  let component: RxJXComponent;
  let fixture: ComponentFixture<RxJXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
