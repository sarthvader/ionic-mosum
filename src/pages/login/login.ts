import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook, 
    public auth: AngularFireAuth) {
  }

  facebookLogin(): Promise<any> {
    return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
        });

    }).catch((error) => { console.log(error) });
  }

  async login(user: User){
    try{
      const result = await this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result){
        this.navCtrl.setRoot('ProfilePage');
      }
      else{
        console.log("nothing boy");
      }
    }
    catch(e){
      console.log(e);
    }
  }

  async register(user: User){
    try{
      const result = await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot('ProfilePage');
      }
    }
    catch(e){
      console.log(e);
    }
   }

   skipLogin(){
     this.navCtrl.push('');
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
