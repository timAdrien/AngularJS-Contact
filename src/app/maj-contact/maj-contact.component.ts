import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

import { ContactListComponent } from '../contact-list/contact-list.component';
import { Icontact } from '../icontact';

@Component({
  selector: 'app-maj-contact',
  templateUrl: './maj-contact.component.html',
  styleUrls: ['./maj-contact.component.css']
})
export class MajContactComponent implements OnInit {

  contact: Icontact;
  contactSelected: Icontact;
  contacts: Icontact[];
  contactForm = new FormGroup ({
    nom: new FormControl(''),
    mail: new FormControl('')
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;
    const index = this.contactSelected.id - 1;
    this.contacts[index] = new Icontact(this.contactSelected.id, this.contactForm.get('nom').value, this.contactForm.get('mail').value);
    this.contactSelected = this.contacts[index];
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.contacts = new ContactListComponent().getContacts();
    this.contact = new ContactListComponent().getContacts().find(o => o.id === +this.route.snapshot.params['id']);
    this.contactSelected = this.contact;
    this.contactForm.controls['nom'].setValue(this.contact.nom);
    this.contactForm.controls['mail'].setValue(this.contact.mail);
  }

}
