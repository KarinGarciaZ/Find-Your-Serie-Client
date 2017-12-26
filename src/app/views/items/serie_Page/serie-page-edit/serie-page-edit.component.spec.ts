import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriePageEditComponent } from './serie-page-edit.component';

describe('SeriePageEditComponent', () => {
  let component: SeriePageEditComponent;
  let fixture: ComponentFixture<SeriePageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriePageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriePageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
