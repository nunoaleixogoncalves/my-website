import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Contact {
  constructor(public name: string, public _replyto: string, public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  mailApi = 'https://mailthis.to/nunoaleixogoncalves@gmail.com';

  constructor(private http: HttpClient) { }

  post(input: Contact) {
    return this.http.post(this.mailApi, input, { responseType: 'text' }).toPromise();
  }
}
