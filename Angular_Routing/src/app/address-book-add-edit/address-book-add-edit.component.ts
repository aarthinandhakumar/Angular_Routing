import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressProviderService } from '../model/address-provider.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-address-book-add-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address-book-add-edit.component.html',
  styleUrl: './address-book-add-edit.component.css',
})
export class AddressBookAddEditComponent {
  friend!: Contact;
  title!: string;

  constructor(
    private route: ActivatedRoute,
    private provider: AddressProviderService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
        this.title = 'Edit Contact';
        this.friend = this.provider.getFriend(+id);
    } else {
        this.title = 'Add Contact';
        // Ensure a new friend is created without an ID
        this.friend = { id: 0, name: '', address: '', phone: '' };
    }
}


onSave() {
  if (this.friend.id && this.friend.id > 0) {
      this.provider.updateFriend(this.friend);
  } else {
      this.provider.addFriend(this.friend);
      console.log('Added friend:', this.friend); // Log after adding
  }
  if (this.friend.id) {
    this.router.navigate(['/details', this.friend.id]);
  }
}



  onCancel() {
    this.router.navigate(['/']); // Navigate back to the address book without saving
  }
}
