import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServicesComponent } from "./components/services/services.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
 selector: 'app-layout',
 imports: [HeaderComponent, ServicesComponent, HomeComponent, ProjectsComponent],
 templateUrl: './layout.component.html'
})
export class LayoutComponent {

 servicesList: any = [
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
 projectsList: any = [
  {
   "id": 1,
   "title": "Restaurant Web Application",
   "description": "This is a restaurant web application",
   "url": "https://restaurant-ang.vercel.app",
   "teck_stack": [
    {
     "id": 1,
     "cat_name": "Front End",
     "skills": [
      "Angular"
     ]
    },
    {
     "id": 2,
     "cat_name": "Backend End",
     "skills": [
      "Node.js",
      "Express"
     ]
    },
    {
     "id": 3,
     "cat_name": "Database",
     "skills": [
      "MongoDB"
     ]
    }
   ]
  },
  {
   "id": 2,
   "title": "Restaurant Mobile App",
   "description": "This is a restaurant mobile application",
   "url": "https://gbr-food-app.vercel.app",
   "teck_stack": [
    {
     "id": 1,
     "cat_name": "Front End",
     "skills": [
      "Ionic (Angular)"
     ]
    },
    {
     "id": 2,
     "cat_name": "Backend End",
     "skills": [
      "Node.js",
      "Express"
     ]
    },
    {
     "id": 3,
     "cat_name": "Database",
     "skills": [
      "MongoDB"
     ]
    }
   ]
  },
  {
   "id": 3,
   "title": "Personal Portfolio",
   "description": "This is a personal portfolio application",
   "url": "https://balarajugandham.netlify.app/",
   "teck_stack": [
    {
     "id": 1,
     "cat_name": "Front End",
     "skills": [
      "HTML",
      "CSS",
      "Java Script"
     ]
    }
   ]
  },
  {
   "id": 4,
   "title": "Chat Mobile App",
   "description": "This is a chat mobile application",
   "url": "https://gbr-chat-app.vercel.app",
   "teck_stack": [
    {
     "id": 1,
     "cat_name": "Front End",
     "skills": [
      "Ionic (Angular)"
     ]
    },
    {
     "id": 2,
     "cat_name": "Backend End",
     "skills": [
      "Node.js",
      "Express"
     ]
    },
    {
     "id": 3,
     "cat_name": "Database",
     "skills": [
      "MongoDB"
     ]
    }
   ]
  }
 ]
}