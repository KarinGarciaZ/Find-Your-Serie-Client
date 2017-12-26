import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriePagesComponent } from './serie-pages.component';

describe('SeriePagesComponent', () => {
  let component: SeriePagesComponent;
  let fixture: ComponentFixture<SeriePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
