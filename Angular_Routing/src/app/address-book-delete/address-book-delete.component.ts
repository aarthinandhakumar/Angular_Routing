import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressProviderService } from '../model/address-provider.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-address-book-delete',
  templateUrl: './address-book-delete.component.html',
  styleUrls: ['./address-book-delete.component.css']
})
export class AddressBookDeleteComponent {
  friend!: Contact; // Contact to be deleted
  title: string = 'Delete Contact';

  constructor(
    private route: ActivatedRoute,
    private provider: AddressProviderService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.friend = this.provider.getFriend(+id); // Fetch the contact to delete
  }

  onDelete() {
    this.provider.deleteFriend(this.friend.id); // Delete the contact
    this.router.navigate(['/']); // Navigate back to address book
  }

  onCancel() {
    this.router.navigate(['/']); // Navigate back without deleting
  }
}
