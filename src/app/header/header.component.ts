import { Component } from '@angular/core';
import { About } from '../Content';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  about?: About;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getAbout().subscribe((about) => (this.about = about));
  }
}
