import { Component } from '@angular/core';
import { ContentService } from './content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-personal-site';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getContent().subscribe((content) => {
      console.log(content);
    })
  }
}
