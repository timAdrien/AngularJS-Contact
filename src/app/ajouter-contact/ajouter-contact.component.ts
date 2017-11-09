import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { ContactListComponent } from '../contact-list/contact-list.component';
import { Icontact } from '../icontact';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.component.html',
  styleUrls: ['./ajouter-contact.component.css']
})
export class AjouterContactComponent implements OnInit {

  contact: Icontact;
  contacts: Icontact[];
  contactForm = new FormGroup ({
    nom: new FormControl(''),
    mail: new FormControl('')
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.contact = new Icontact(this.contacts.length, this.contactForm.get('nom').value, this.contactForm.get('mail').value);
    this.contacts.push(this.contact);
  }

  constructor() { }

  ngOnInit() {
    this.contacts = new ContactListComponent().getContacts();
  }
}
