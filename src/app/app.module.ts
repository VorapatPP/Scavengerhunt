import { TaskDetailPage } from './../pages/Task/task-detail';
import { SignupPage } from './../pages/Signup/signup';
import { LoginPage } from './../pages/Login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TaskPage } from '../pages/Task/task';
import { CheckPage } from '../pages/Check/check';
import { ProfilePage } from '../pages/Profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TaskPage,
    CheckPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    SignupPage,
    TaskDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskPage,
    CheckPage,
    ProfilePage,
    TabsPage,
    LoginPage,
    SignupPage,
    TaskDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
