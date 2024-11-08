import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { TranslationResult } from '../models/translatedtext.model';

@Injectable({
  providedIn: 'root'
})
export class TextTruncationService {

  MAX_CHAR_TO_DISPLAY: number = 240;

  constructor(private http: HttpClient) {}

  truncateText(text: string): string {
    if (text.length > this.MAX_CHAR_TO_DISPLAY) {
      return text.substring(0, this.MAX_CHAR_TO_DISPLAY) + '...';
    }
    return text;
  }

  translateText(text: string, sourceLang: string, targetLang: string): Observable<TranslationResult> {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    return this.http.get<{ responseData: { translatedText: string } }>(apiUrl).pipe(
      map(response => ({
        translatedText: response.responseData.translatedText,
        text: text,
        translated: true
      }))
    );
  }
}
