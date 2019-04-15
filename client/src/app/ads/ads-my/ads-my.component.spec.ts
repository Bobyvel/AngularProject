import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsMyComponent } from './ads-my.component';

describe('AdsAllComponent', () => {
  let component: AdsMyComponent;
  let fixture: ComponentFixture<AdsMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
