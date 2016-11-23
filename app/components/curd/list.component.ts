import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

import { Contact } from '../../definitions/contact';

@Component({
  	selector		: 'my-list',
    templateUrl		: './app/views/curd/list.html',
    providers		: [ContactService]

})


export class ListComponent  implements OnInit{

	contacts: Contact[];

	constructor(private contactService: ContactService) {}


	ngOnInit(): void {
		this.getContacts();
	}

	
	getContacts(): void {
	 	
	 	this.contactService.getContacts().then(contacts => this.contacts = contacts);

	}


	deleteContact(id: String): void {
	    this.contactService
	        .deleteContact(id)
	        .then(() => {
	          this.getContacts()
	        });
	}
}
