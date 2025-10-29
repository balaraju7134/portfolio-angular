import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HelperService } from '../../services/helper.service';

@Component({
 selector: 'app-header',
 imports: [CommonModule, RouterLink],
 templateUrl: './header.component.html'
})
export class HeaderComponent {
 @Input() userInfo: any = {}
 titleName: string = ""
 roleName: string = ""
 navLinks: any = [
  { id: 1, name: "Home", icon: "fa-solid fa-house", path: "home" },
  { id: 2, name: "Services", icon: "fa-solid fa-gears", path: "services" },
  { id: 3, name: "Projects", icon: "fa-solid fa-diagram-project", path: "projects" },
  { id: 4, name: "About", icon: "fa-solid fa-circle-info", path: "about" },
  { id: 5, name: "Contact", icon: "fa-solid fa-location-dot", path: "contact" },
 ]
 ngOnInit() {
  this.titleName = this.userInfo["name"] || ""
  this.roleName = this.userInfo["role"] || ""
 }
 scrollToSection(item: any) {
  HelperService.scrollToSection(item.path)
 }
}