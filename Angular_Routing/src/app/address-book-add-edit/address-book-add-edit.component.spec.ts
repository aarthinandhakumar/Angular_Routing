import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookAddEditComponent } from './address-book-add-edit.component';

describe('AddressBookAddEditComponent', () => {
  let component: AddressBookAddEditComponent;
  let fixture: ComponentFixture<AddressBookAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressBookAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressBookAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
