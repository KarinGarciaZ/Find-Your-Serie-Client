import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePageCreateComponent } from './movie-page-create.component';

describe('MoviePageCreateComponent', () => {
  let component: MoviePageCreateComponent;
  let fixture: ComponentFixture<MoviePageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
