import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatabaseService, ForecastService, Sql, UtilService } from '../providers';
import { MosumApp } from './app.component';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FIREBASE_CREDENTIALS } from "./firebase.credentials";


@NgModule({
  declarations: [
    MosumApp
  ],
  imports: [
    JsonpModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    IonicModule.forRoot(MosumApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MosumApp
  ],
  providers: [
    Keyboard,
    Sql,
    DatabaseService,
    UtilService,
    ForecastService,
    SplashScreen,
    StatusBar,
    BrowserTab,
    Facebook,
    AngularFireAuth
  ]
})
export class AppModule {
}
