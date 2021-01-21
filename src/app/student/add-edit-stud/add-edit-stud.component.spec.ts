import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudComponent } from './add-edit-stud.component';

describe('AddEditStudComponent', () => {
  let component: AddEditStudComponent;
  let fixture: ComponentFixture<AddEditStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
