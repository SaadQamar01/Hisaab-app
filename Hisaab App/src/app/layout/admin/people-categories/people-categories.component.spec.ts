import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCategoriesComponent } from './people-categories.component';

describe('PeopleCategoriesComponent', () => {
  let component: PeopleCategoriesComponent;
  let fixture: ComponentFixture<PeopleCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
