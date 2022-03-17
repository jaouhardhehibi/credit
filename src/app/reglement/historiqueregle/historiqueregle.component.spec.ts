import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueregleComponent } from './historiqueregle.component';

describe('HistoriqueregleComponent', () => {
  let component: HistoriqueregleComponent;
  let fixture: ComponentFixture<HistoriqueregleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueregleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueregleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
