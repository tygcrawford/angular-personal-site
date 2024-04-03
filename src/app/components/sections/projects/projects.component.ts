import { Component } from '@angular/core';
import { Project } from '../../../Content';
import { ContentService } from '../../../content.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  projects?: Project[];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
