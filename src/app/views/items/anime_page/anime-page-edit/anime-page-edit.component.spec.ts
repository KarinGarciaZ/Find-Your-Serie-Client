import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePageEditComponent } from './anime-page-edit.component';

describe('AnimePageEditComponent', () => {
  let component: AnimePageEditComponent;
  let fixture: ComponentFixture<AnimePageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimePageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimePageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
