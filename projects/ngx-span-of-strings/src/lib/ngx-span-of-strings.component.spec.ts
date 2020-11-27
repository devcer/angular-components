import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSpanOfStringsComponent } from './ngx-span-of-strings.component';

describe('NgxSpanOfStringsComponent', () => {
  let component: NgxSpanOfStringsComponent;
  let fixture: ComponentFixture<NgxSpanOfStringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSpanOfStringsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSpanOfStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
