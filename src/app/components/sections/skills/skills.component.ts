import { Component } from '@angular/core';
import { SkillCategory } from '../../../Content';
import { ContentService } from '../../../content.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
})
export class SkillsComponent {
  skillCategories?: SkillCategory[];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getSkills().subscribe((skills) => {
      this.skillCategories = skills;
    });
  }
}
