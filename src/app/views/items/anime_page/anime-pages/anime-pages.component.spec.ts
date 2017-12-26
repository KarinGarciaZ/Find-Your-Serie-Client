import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePagesComponent } from './anime-pages.component';

describe('AnimePagesComponent', () => {
  let component: AnimePagesComponent;
  let fixture: ComponentFixture<AnimePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
