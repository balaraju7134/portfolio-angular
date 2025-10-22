import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
 selector: 'app-header',
 imports: [CommonModule],
 templateUrl: './header.component.html'
})
export class HeaderComponent {
 titleName: any = "Balaraju Gandham"
 navLinks: any = [
  { id: 1, name: "Home", icon: "fa-solid fa-house", path: "home" },
  { id: 2, name: "Services", icon: "fa-solid fa-gears", path: "services" },
  { id: 3, name: "Projects", icon: "fa-solid fa-diagram-project", path: "projects" },
  { id: 4, name: "About", icon: "fa-solid fa-circle-info", path: "about" },
  { id: 5, name: "Contact", icon: "fa-solid fa-location-dot", path: "contact" },
 ]
}