import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsListComponent } from './components/shared/skills-list/skills-list.component';
import { ContentHeaderComponent } from './components/shared/content-header/content-header.component';
import { ContentWrapperComponent } from './components/shared/content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    EducationComponent,
    SkillsComponent,
    SkillsListComponent,
    ContentHeaderComponent,
    ContentWrapperComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
