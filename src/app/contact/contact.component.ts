import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Icontact } from '../icontact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Icontact;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contact = new ContactListComponent().getContacts().find(o => o.id === +this.route.snapshot.params['id']);
  }
}
