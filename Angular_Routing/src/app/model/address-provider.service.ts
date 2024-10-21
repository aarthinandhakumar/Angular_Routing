import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class AddressProviderService {
  private storageKey = 'contacts';

  constructor() {
    // Load initial data from localStorage or use mock data
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(CONTACTS));
    }
  }

  getFriends(): Contact[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getFriend(id: number): Contact {
    const friends: Contact[] = this.getFriends();
    return friends.find(f => f.id === id)!;
  }

  addFriend(friend: Contact): Contact {
    const friends: Contact[] = this.getFriends();
    const maxId = friends.length > 0 ? friends[friends.length - 1].id : 0;
    console.log('Adding friend with ID:', maxId + 1); // Debug log
    friend.id = maxId + 1; 
    friends.push(friend); 
    localStorage.setItem(this.storageKey, JSON.stringify(friends)); 
    return friend; 
}

updateFriend(updatedFriend: Contact): void {
    const friends: Contact[] = this.getFriends();
    const index = friends.findIndex(f => f.id === updatedFriend.id);
    console.log('Updating friend with ID:', updatedFriend.id); // Debug log
    if (index !== -1) {
        friends[index] = updatedFriend; 
        localStorage.setItem(this.storageKey, JSON.stringify(friends)); 
    }
}

deleteFriend(id: number): void {
  const friends: Contact[] = this.getFriends();
  const index = friends.findIndex(f => f.id === id);
  if (index !== -1) {
    friends.splice(index, 1); // Remove the contact from the array
    localStorage.setItem(this.storageKey, JSON.stringify(friends)); // Persist changes in localStorage
  }
}

  // Add this method to get the next available ID
  getNextId(): number {
    const friends: Contact[] = this.getFriends();
    return friends.length > 0 ? friends[friends.length - 1].id + 1 : 1; // Return the next ID
}


}
