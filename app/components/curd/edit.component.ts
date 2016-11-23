import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ContactService } from '../../services/contact.service';

import { Contact } from '../../definitions/contact';


import 'rxjs/add/operator/switchMap';


@Component({
  	selector		: 'my-edit',
    templateUrl		: './app/views/curd/edit.html',
    providers		: [ContactService]
})


export class EditComponent  implements OnInit{

	contact: Contact;
	edit_id: number;
	constructor( private contactService: ContactService,private route: ActivatedRoute,private location: Location ) {}


	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.edit_id = params['id'];
			this.getContact();
		});
	}

	getContact(): void {
	 	  	 
	 	this.contactService.getContact(this.edit_id).then(contact => {
	 		this.contact = contact;
	 	});

	}

	goBack(): void {
    	this.location.back();
  	}

  	update(): void {
	    this.contactService.updateContact(this.contact)
	      .then(() => this.goBack());
	}
}