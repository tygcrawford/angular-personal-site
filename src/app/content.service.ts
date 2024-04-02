import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as content from './Content';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private filePath = '../assets/content/';

  constructor(private http: HttpClient) {}

  getAbout(): Observable<content.About> {
    return this.http.get<content.About>(this.filePath + 'about.json');
  }

  getEducation(): Observable<content.Education> {
    return this.http.get<content.Education>(this.filePath + 'education.json');
  }

  getExperience(): Observable<content.Experience[]> {
    return this.http.get<content.Experience[]>(
      this.filePath + 'experience.json'
    );
  }

  getProjects(): Observable<content.Project[]> {
    return this.http.get<content.Project[]>(this.filePath + 'projects.json');
  }

  getSkills(): Observable<content.SkillCategory[]> {
    return this.http.get<content.SkillCategory[]>(
      this.filePath + 'skills.json'
    );
  }
}
