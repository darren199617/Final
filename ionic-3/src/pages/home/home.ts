import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import { NewTaskModalPage } from '../new-task-modal/new-task-modal';
import { DetailsPage } from '../details/details';
import { LoginPage } from '../login/login';
import { TestPage } from '../test/test';
import { Test2Page } from '../test2/test2';
import { TechniquesPage } from '../techniques/techniques';
import { InformationPage } from '../information/information';
import { TipsPage } from '../tips/tips';
import { MenuPage } from '../menu/menu';
import { QuizPage } from '../quiz/quiz';
import { AboutPage } from '../about/about';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navParams: NavParams,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private firebaseService: FirebaseService) {
  }
  

  profile(){

        	this.navCtrl.push(NewTaskModalPage); 
  }
information(){

        	this.navCtrl.push(InformationPage); 
  }

tips(){

        	this.navCtrl.push(TipsPage); 
  }

  quiz(){

        	this.navCtrl.push(QuizPage); 
  }


test1(){

        	this.navCtrl.push(TestPage); 
  }

test2(){

        	this.navCtrl.push(Test2Page); 
  }

menu(){

        	this.navCtrl.push(MenuPage); 
  }

  about(){

          this.navCtrl.push(AboutPage); 
  }

  details(){

        	this.navCtrl.push(DetailsPage); 
  }

  techniques(){

        	this.navCtrl.push(TechniquesPage); 
  }

logout(){
   /* this.authService.doLogout()
    .then(res => {
      this.navCtrl.push(LoginPage)});*/
        	this.navCtrl.setRoot(LoginPage); 

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
