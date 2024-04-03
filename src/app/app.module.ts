import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { EducationComponent } from './components/sections/education/education.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsListComponent } from './components/shared/skills-list/skills-list.component';
import { ContentHeaderComponent } from './components/shared/content-header/content-header.component';
import { ContentWrapperComponent } from './components/shared/content-wrapper/content-wrapper.component';

import { NgIconsModule } from '@ng-icons/core';
import {
  ionLogoGithub,
  ionLogoLinkedin,
  ionLogoCodepen,
} from '@ng-icons/ionicons';

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
  imports: [
    BrowserModule,
    HttpClientModule,
    NgIconsModule.withIcons({ ionLogoGithub, ionLogoLinkedin, ionLogoCodepen }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
