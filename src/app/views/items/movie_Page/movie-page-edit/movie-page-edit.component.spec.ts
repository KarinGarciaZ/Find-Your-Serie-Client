import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageEditComponent } from './movie-page-edit.component';

describe('MoviePageEditComponent', () => {
  let component: MoviePageEditComponent;
  let fixture: ComponentFixture<MoviePageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
