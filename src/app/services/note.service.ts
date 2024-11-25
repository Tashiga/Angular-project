import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) { }

  getNotes(userId: number): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}?userId=${userId}`);
  }

  createNote(newNote: Note): Observable<Note> {
    return this.http.post<Note>(`${this.apiUrl}`, newNote);
  }

  deleteNote(noteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${noteId}`);
  }
}
