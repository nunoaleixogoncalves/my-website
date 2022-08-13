import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('2000ms ease-in')),
      transition('true => false', animate('2000ms ease-out'))
    ])
  ]
})
export class ContactComponent implements OnInit {

  contact = new Contact('', '', '');
  submitted = false;
  inView = false;

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