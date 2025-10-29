import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-home',
 imports: [],
 templateUrl: './home.component.html'
})
export class HomeComponent {
 @Input() userInfo: any = {}
 userName: string = ""
 about: string = ""
 img: string = ""

 ngOnInit() {
  this.userName = this.userInfo["name"] || ""
  this.about = this.userInfo["about"] || ""
  this.img = this.userInfo["img"] || ""
 }
}
