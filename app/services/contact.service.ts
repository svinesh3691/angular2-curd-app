import { Injectable }         from '@angular/core';
import { Headers,Http }       from '@angular/http';

import { Contact }            from '../definitions/contact';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class ContactService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl  = 'http://localhost/api';

    
    constructor(private http: Http) { }
    

    createContact(contact:Contact) : Promise<any> {
        const url = `${this.apiUrl}/create_contact.php`;

        return this.http.post(url,JSON.stringify(contact))
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError); 
    
    }



    updateContact(contact:Contact) : Promise<any> {
        const url = `${this.apiUrl}/update_contact.php`;

        return this.http.post(url,JSON.stringify(contact))
                    .toPromise()
                    .then(() => null)
                    .catch(this.handleError); 
    }



    getContacts() : Promise<Contact[]>  {
        const url = `${this.apiUrl}/contacts.php`;
        
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json() as Contact[])
                    .catch(this.handleError);

    }



    getContact(id: number) : Promise<Contact>  {
        const url = `${this.apiUrl}/contacts.php?id=${id}`;
        
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json() as Contact)
                    .catch(this.handleError);

    }


    

    deleteContact(id:String) : Promise<any> {
        const url = `${this.apiUrl}/delete_contact.php/?id=${id}`;
        
        return this.http.get(url)
                   .toPromise()
                   .then(() => null)
                   .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
          return Promise.reject(error.message || error);
    }

}
