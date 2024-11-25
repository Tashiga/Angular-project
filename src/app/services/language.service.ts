import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private apiUrl = 'http://localhost:3000/languages';

  constructor(private http: HttpClient) { }

  getAllLanguages(): Observable<language[]> {
    return this.http.get<language[]>(this.apiUrl);
  }

  getlanguageByValue(value: string): Observable<language> {
    const url = `${this.apiUrl}/${value}`;
    return this.http.get<language>(url);
  }
}