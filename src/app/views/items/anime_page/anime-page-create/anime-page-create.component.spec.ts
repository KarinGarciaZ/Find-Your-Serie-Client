import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePageCreateComponent } from './anime-page-create.component';

describe('AnimePageCreateComponent', () => {
  let component: AnimePageCreateComponent;
  let fixture: ComponentFixture<AnimePageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimePageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimePageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
