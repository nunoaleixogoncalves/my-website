import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = new Contact('', '', '');
  submitted = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  submit() {
    this.submitted = true;
    this.contactService.post(this.contact).then(data => {

    }).catch(error => {

    }).finally(() => {
      this.contact = new Contact('', '', '');
      this.submitted = false;
    });
  }

}