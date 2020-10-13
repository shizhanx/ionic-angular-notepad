import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
