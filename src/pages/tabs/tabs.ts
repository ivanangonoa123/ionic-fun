import { Component } from '@angular/core';

import { AlertasPage } from '../alertas/alertas';
import { GraficosPage } from '../graficos/graficos';
import { ChatPage } from '../chat/chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AlertasPage;
  tab2Root: any = GraficosPage;
  tab3Root: any = ChatPage;

  constructor() {

  }
}
