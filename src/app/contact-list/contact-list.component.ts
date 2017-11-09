import { Component, OnInit } from '@angular/core';
import { Icontact } from '../icontact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [
    new Icontact(1, 'Toto', 'titi@gmail.com'),
    new Icontact(2, 'Lolo', 'lolo@gmail.com'),
    new Icontact(3, 'Martin', 'martin@gmail.com')
  ];
  constructor() { }

  ngOnInit() {
  }

  getContacts() {
    return this.contacts;
  }
}
