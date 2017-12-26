import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaPagesComponent } from './manga-pages.component';

describe('MangaPagesComponent', () => {
  let component: MangaPagesComponent;
  let fixture: ComponentFixture<MangaPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
