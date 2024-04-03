import { Component } from '@angular/core';
import { ContentService } from '../../../content.service';
import { About } from '../../../Content';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent {
  about?: About;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getAbout().subscribe((about) => {
      this.about = about;
    });
  }
}
