import { Component } from '@angular/core';
import { Education } from '../../../Content';
import { ContentService } from '../../../content.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass'],
})
export class EducationComponent {
  education?: Education;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getEducation().subscribe((education) => {
      this.education = education;
    });
  }
}
