import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ContactService } from '../../services/contact.service';

import { Contact } from '../../definitions/contact';


@Component({
  	selector		: 'my-add',
    templateUrl		: './app/views/curd/add.html',
    providers		: [ContactService]
})


export class AddComponent {

	contact: Contact;

	constructor( private contactService: ContactService,private route: ActivatedRoute,private location: Location ) {

			this.contact = {'id':0,'name':'','phone':''};
	
	}

	

	goBack(): void {
    	this.location.back();
  	}

  	add(): void {
	    this.contactService.createContact(this.contact)
	      .then(() => this.goBack());
	}
}