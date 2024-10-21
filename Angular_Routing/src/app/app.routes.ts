import { Routes } from '@angular/router';
import { AddressBookAddEditComponent } from './address-book-add-edit/address-book-add-edit.component';
import { AddressBookEntryComponent } from './address-book-entry/address-book-entry.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressBookDeleteComponent } from './address-book-delete/address-book-delete.component';
// Routes for various actions
export const routes: Routes = [
  { path: '', 						component: AddressBookComponent },
  { path: 'details/:id', 	component: AddressBookEntryComponent },
  { path: 'add', 					component: AddressBookAddEditComponent },
  { path: 'edit/:id', 		component: AddressBookAddEditComponent },
  { path: 'delete/:id', 		component: AddressBookDeleteComponent }];
