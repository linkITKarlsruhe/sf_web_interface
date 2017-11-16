import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtsComponent } from './fts.component';

describe('FtsComponent', () => {
  let component: FtsComponent;
  let fixture: ComponentFixture<FtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
