import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ItemGraficoPage } from '../item-grafico/item-grafico';

@Component({
  selector: 'page-graficos',
  templateUrl: 'graficos.html'
})
export class GraficosPage {
  
  constructor(public navCtrl: NavController) {

  }

  itemSelected() {
    this.navCtrl.push(ItemGraficoPage);
  }
}
