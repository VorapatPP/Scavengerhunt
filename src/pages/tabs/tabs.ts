import { Component } from '@angular/core';

import { TaskPage } from '../Task/task';
import { CheckPage } from '../Check/check';
import { ProfilePage } from '../Profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = TaskPage;
  tab3Root = CheckPage;

  constructor() {

  }
}
