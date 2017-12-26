import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePagesComponent } from './movie-pages.component';

describe('MoviePagesComponent', () => {
  let component: MoviePagesComponent;
  let fixture: ComponentFixture<MoviePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
