import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsColumnsColorsComponent } from './rows-columns-colors.component';

describe('RowsColumnsColorsComponent', () => {
  let component: RowsColumnsColorsComponent;
  let fixture: ComponentFixture<RowsColumnsColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsColumnsColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsColumnsColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
