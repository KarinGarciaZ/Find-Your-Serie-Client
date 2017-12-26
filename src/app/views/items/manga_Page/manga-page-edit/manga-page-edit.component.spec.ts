import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaPageEditComponent } from './manga-page-edit.component';

describe('MangaPageEditComponent', () => {
  let component: MangaPageEditComponent;
  let fixture: ComponentFixture<MangaPageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaPageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
