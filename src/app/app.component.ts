import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Auth } from '@ionic/cloud-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { EditarPerfilPage } from './../pages/editar-perfil/editar-perfil';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  @ViewChild('content') navigate;
 
  constructor(platform: Platform, public auth: Auth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      if (this.auth.isAuthenticated()) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
    });  
  }

   logout() {
    console.log(this.auth.isAuthenticated());
    this.auth.logout();
    this.navigate.setRoot(LoginPage);
  }

  editProfileHandler() {
    this.navigate.push(EditarPerfilPage)
  }

}
