import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
export class Contact {
  constructor(public name: string, public email: string, public message: string) { }
}

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
export class ContactComponent {

  contact = new Contact('', '', '');
  submitted = false;
  inView = false;
  mailkey: string;

  constructor() {
    this.mailkey = environment.MAIL_KEY;
  }

}