import { Component } from '@angular/core';
import { Experience } from '../Content';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
})
export class ExperienceComponent {
  experiences?: Experience[];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getExperience().subscribe((experiences) => {
      this.experiences = experiences;
    });
  }
}
