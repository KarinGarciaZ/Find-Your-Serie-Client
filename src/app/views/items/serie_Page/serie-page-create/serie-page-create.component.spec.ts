import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriePageCreateComponent } from './serie-page-create.component';

describe('SeriePageCreateComponent', () => {
  let component: SeriePageCreateComponent;
  let fixture: ComponentFixture<SeriePageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriePageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriePageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
