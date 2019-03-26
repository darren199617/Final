import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Test2Page } from '../test2/test2';
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


test1(){

        	this.navCtrl.push(TestPage); 
  }

test2(){

        	this.navCtrl.push(Test2Page); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

}
