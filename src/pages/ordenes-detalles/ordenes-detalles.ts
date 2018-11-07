import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ordenes-detalles',
  templateUrl: 'ordenes-detalles.html',
})
export class OrdenesDetallesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdenesDetallesPage');
  }

}
