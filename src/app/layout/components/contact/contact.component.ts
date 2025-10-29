import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-contact',
 imports: [],
 templateUrl: './contact.component.html'
})
export class ContactComponent {
 @Input() contactInfo: any = {}

 displayList: any = [
  { label: "Mobile Number", key: "mobile_no" },
  { label: "Alternative Number", key: "alternative_number" },
  { label: "Email", key: "email" },
  { label: "Alternative Email", key: "alternative_email" },
  { label: "Address", key: "address" },
 ]
}
