import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from './Content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private filePath = '../assets/content/content.json';

  constructor(private http:HttpClient) { }

  getContent(): Observable<Content> {
    return this.http.get<Content>(this.filePath);
  }

}
