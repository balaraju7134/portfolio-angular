import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-projects',
 imports: [],
 templateUrl: './projects.component.html'
})
export class ProjectsComponent {
 @Input() projectsList: any = []
}
