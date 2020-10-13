import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public notesService: NotesService,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }
  
  ngOnInit(): void {
    this.notesService.load();
  }

  addNote() {
    this.alertCtrl.create({
      header: 'New note',
      message: 'Input title please', 
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Confirm',
          handler: data => {
            this.notesService.createNote(data.title);
          }
        }
      ]
    }).then(a => {
      a.present();
    })
  }

}
