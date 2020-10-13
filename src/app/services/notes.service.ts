import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes: Note[] = [];
  public loaded: Boolean = false;
  private id: number = 1;

  constructor(private storage: Storage) { }

  load(): Promise<Boolean> {
    return new Promise(resolve => {
      this.storage.get('notes').then(notes => {
        if (notes != null) {
          this.notes = notes;
        }
        this.loaded = true;
        resolve(true);
      })
    })
  }

  save(): void {
    this.storage.set('notes', this.notes);
  }

  getNote(id: string): Note {
    return this.notes.find(note => note.id === id);
  }

  createNote(title: string): void {
    let note: Note = {
      id: this.id.toString(),
      title: title,
      content: ''
    };
    this.notes.push(note);
    this.id++;
    this.save();
  }

  deleteNote(note: Note): void {
    let index = this.notes.indexOf(note);
    if (index >= 0) {
      this.notes.splice(index, 1);
      this.save()
    }
  }
}
