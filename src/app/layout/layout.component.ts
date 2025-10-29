import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServicesComponent } from "./components/services/services.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import * as portfolioJSON from "./portfolio.json";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
 selector: 'app-layout',
 imports: [HeaderComponent, ServicesComponent, HomeComponent, ProjectsComponent, ContactComponent],
 templateUrl: './layout.component.html'
})
export class LayoutComponent {

 portfolioData: any = {}
 userInfo: any = {}
 servicesList: any = []
 projectsList: any = []
 contactInfo: any = {}

 ngOnInit() {
  this.portfolioData = JSON.parse(JSON.stringify(portfolioJSON))
  this.userInfo = this.portfolioData["user_info"] || {}
  this.servicesList = this.portfolioData["services"] || []
  this.projectsList = this.portfolioData["projects"] || []
  this.contactInfo = this.portfolioData["contact_info"] || {}
 }
}