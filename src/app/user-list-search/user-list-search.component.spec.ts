import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListSearchComponent } from './user-list-search.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('UserListSearchComponent', () => {
  let component: UserListSearchComponent;
  let fixture: ComponentFixture<UserListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListSearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
