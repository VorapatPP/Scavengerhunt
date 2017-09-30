import { TaskDetailPage } from './../pages/Task/task-detail';
import { TabsPage } from './../pages/tabs/tabs';
import { LoginPage } from './../pages/Login/login';
import { CheckPage } from './../pages/Check/check';
import { TaskPage } from './../pages/Task/task';
import { ProfilePage } from './../pages/Profile/profile';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage} from './../pages/Signup/signup';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Profile', component: ProfilePage },
      { title: 'Task', component: TaskPage },
      { title: 'Check', component: CheckPage},
      { title: 'Logout', component: LoginPage},
      { title: 'Signup', component: SignupPage},
      { title: 'TaskDetail', component: TaskDetailPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
