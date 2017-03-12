import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { GraficosPage } from '../pages/graficos/graficos';
import { ChatPage } from '../pages/chat/chat';
import { AlertasPage } from '../pages/alertas/alertas';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemGraficoPage } from '../pages/item-grafico/item-grafico';
import { LoginPage } from './../pages/login/login';
import { EditarPerfilPage } from './../pages/editar-perfil/editar-perfil';
import { EditarContactoPage } from '../pages/editar-contacto/editar-contacto';

const cloudSettings:CloudSettings = {
  'core': {
    'app_id': 'b0c2f6cb'
  }
}

@NgModule({
  declarations: [
    MyApp,
    GraficosPage,
    ChatPage,
    AlertasPage,
    ItemGraficoPage,
    TabsPage,
    LoginPage,
    EditarPerfilPage,
    EditarContactoPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top'  
    }),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GraficosPage,
    ChatPage,
    AlertasPage,
    ItemGraficoPage,
    TabsPage,
    LoginPage,
    EditarPerfilPage,
    EditarContactoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
