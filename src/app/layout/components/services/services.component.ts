import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-services',
 imports: [],
 templateUrl: './services.component.html'
})
export class ServicesComponent {
 @Input() servicesList: any = []
}