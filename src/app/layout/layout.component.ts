import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
 selector: 'app-layout',
 imports: [HeaderComponent],
 templateUrl: './layout.component.html'
})
export class LayoutComponent {

 services: any = [
  {
   "id": 1,
   "title": "Front-End Development",
   "description": [
    "Build responsive and modern user interfaces using Angular, React, and Ionic.",
    "Ensure cross-browser compatibility and seamless performance across devices.",
    "Utilize Tailwind CSS and Bootstrap for scalable, clean UI design."
   ]
  },
  {
   "id": 2,
   "title": "Back-End Development",
   "description": [
    "Develop secure and scalable RESTful APIs using Node.js and Express.js.",
    "Implement authentication flows with JWT and role-based access.",
    "Build efficient backend services for both web and mobile applications."
   ]
  },
  {
   "id": 3,
   "title": "Database Management",
   "description": [
    "Design and manage structured data using MySQL and MongoDB.",
    "Optimize database performance and implement indexing for fast retrieval.",
    "Ensure secure and validated data storage with backup strategies."
   ]
  },
  {
   "id": 4,
   "title": "Full Stack Application Development",
   "description": [
    "Build complete web and hybrid mobile applications from scratch.",
    "Integrate frontend, backend, and database into a seamless, scalable system.",
    "Deploy applications with a focus on performance, maintainability, and security."
   ]
  }
 ]
}
