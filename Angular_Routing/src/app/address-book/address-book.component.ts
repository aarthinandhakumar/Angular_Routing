import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AddressProviderService } from '../model/address-provider.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './address-book.component.html',
  styleUrl: './address-book.component.css'
})
export class AddressBookComponent {
  friends: Contact[] = [];

  constructor(private provider: AddressProviderService, private router: Router) { }

  ngOnInit() {
    this.friends = this.provider.getFriends(); // Fetch friends again
}
onDelete(id: number) {
  this.router.navigate(['/delete', id]);
}
}
