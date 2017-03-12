import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { UserDetails, IDetailedError, Auth, User } from '@ionic/cloud-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  showLogin: boolean = true;
  email: string = 'ivan.angonoa@gghmail.com';
  password: string = 'Johny123';
  name: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: Auth, public user: User, public alertCtrl: AlertController, public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    if (this.showLogin) {
      console.log('process login');

      if (this.email === '' || this.password === '') {
        let alert = this.alertCtrl.create({
          title: 'Error de Registro',
          subTitle: 'Todos los campos son requeridos',
          buttons: ['OK']
        });
        alert.present();
        return;
      }

      let loader = this.loadingCtrl.create({
        content: "Logueandose..."
      });
      loader.present();

      this.auth.login('basic', { 'email': this.email, 'password': this.password }).then(() => {
        console.log('ok');
        loader.dismissAll();
        this.navCtrl.setRoot(TabsPage);
      }, (err) => {
        loader.dismissAll();
        console.log(err.message);

        let errors = '';
        if (err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid. <br/>';
        if (err.message === 'UNAUTHORIZED') errors += 'Password is required. <br/>';

        let alert = this.alertCtrl.create({
          title: 'Login Error',
          subTitle: errors,
          buttons: ['OK']
        });
        alert.present();
      });
    } else {
      this.showLogin = true;
    }
  }

  doRegister() {
    if (!this.showLogin) {
      console.log('process register');

      if (this.name === '' || this.email === '' || this.password === '') {
        let alert = this.alertCtrl.create({
          title: 'Register Error',
          subTitle: 'All fields are required',
          buttons: ['OK']
        });
        alert.present();
        return;
      }

      let details: UserDetails = { 'email': this.email, 'password': this.password, 'name': this.name };
      console.log(details);

      let loader = this.loadingCtrl.create({
        content: "Registrando..."
      });
      loader.present();

      this.auth.signup(details).then(() => {
        console.log('ok signup');
        this.auth.login('basic', { 'email': details.email, 'password': details.password }).then(() => {
          loader.dismissAll();
          this.navCtrl.setRoot(TabsPage);
        });
      }, (err: IDetailedError<string[]>) => {
        loader.dismissAll();
        let errors = '';
        for (let e of err.details) {
          console.log(e);
          if (e === 'required_email') errors += 'Email requerido. <br/>';
          if (e === 'required_password') errors += 'Password requerido. <br/>';
          if (e === 'conflict_email') errors += 'Un usuario ya existe con este email. <br/>';
          if (e === 'invalid_email') errors += 'La dirección de email no es valida.';
        }
        let alert = this.alertCtrl.create({
          title: 'Error en registro',
          subTitle: errors,
          buttons: ['OK']
        });
        alert.present();
      });

    } else {
      this.showLogin = false;
    }
  }

}
