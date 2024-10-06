import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListPage } from './users-list.page';

describe('UsersListPage', () => {
  let component: UsersListPage;
  let fixture: ComponentFixture<UsersListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
