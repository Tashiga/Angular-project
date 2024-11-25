import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/models/note.model';
import { User, UserInit } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes: Note[] = [];
  noteForm: FormGroup;
  isFormVisible: boolean = false;
  user: User = UserInit;

  constructor(private authService: AuthService, 
              private noteService: NoteService, 
              private fb: FormBuilder) {
      this.noteForm = this.fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
      });
     }

  ngOnInit(): void {
    this.authService.userInfo$.subscribe(user => {
      if (user && user.id) {
        this.user = user;
        this.loadNotes(user.id);
      }
    });
  }

  loadNotes(userId: number): void {
    this.noteService.getNotes(userId).subscribe((notes) => this.notes = notes);
  }

  addNote(): void {
    if (this.noteForm.valid) {
      const { title, content } = this.noteForm.value;
      const date = new Date().toISOString();
      const newNote: Note = {
        title,
        content,
        created_at: date,
        userId: this.user.id
      };
      this.noteService.createNote(newNote).subscribe((note) => {
        this.notes.push(note);
        this.noteForm.reset();
        this.isFormVisible = false;
      });
    }
  }

  deleteNote(noteId: number | undefined): void {
    if(noteId){
      this.noteService.deleteNote(noteId).subscribe(() => 
        this.notes = this.notes.filter((note) => note.id !== noteId)
      );
    }
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }
}
