import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AddressProviderService } from '../model/address-provider.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-address-book-entry',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './address-book-entry.component.html',
  styleUrl: './address-book-entry.component.css'
})
export class AddressBookEntryComponent {
  friend!: Contact;
	sub: any;
  totalContacts!: number;
 // Constructor to inject necessary services
  constructor(private route: ActivatedRoute,
  		private provider: AddressProviderService) { }
// Lifecycle hook that runs after component initialization
  ngOnInit() {

    this.totalContacts = this.provider.getFriends().length;

  	this.sub =
      this.route.params.subscribe((params: { [x: string]: string; }) => {
        console.log(params);
        let id: string = params['id'];
        this.friend = this.provider.getFriend(+id);
      });

  }
// Lifecycle hook that runs before the component is destroyed
  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.sub.unsubscribe();
  }
}
