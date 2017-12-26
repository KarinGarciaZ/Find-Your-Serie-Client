import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaPageCreateComponent } from './manga-page-create.component';

describe('MangaPageCreateComponent', () => {
  let component: MangaPageCreateComponent;
  let fixture: ComponentFixture<MangaPageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaPageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
