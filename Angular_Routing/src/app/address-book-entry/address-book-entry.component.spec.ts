import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookEntryComponent } from './address-book-entry.component';

describe('AddressBookEntryComponent', () => {
  let component: AddressBookEntryComponent;
  let fixture: ComponentFixture<AddressBookEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressBookEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressBookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
