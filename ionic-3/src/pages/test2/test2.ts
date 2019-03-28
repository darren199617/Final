import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TechniquesPage } from '../techniques/techniques';
import { ScoresPage } from '../scores/scores';


/**
 * Generated class for the Test2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test2',
  templateUrl: 'test2.html',
})
export class Test2Page {
 Counter1: number;
  Counter2: number;
  Counter3: number;
  Counter4: number;
  Counter5: number;
  Totalcount: number;

  constructor(
  	public toastCtrl: ToastController,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	) {
  	this.Counter1=0;
    this.Counter2=0;
    this.Counter3=0;
    this.Counter4=0;
    this.Counter5=0;
    this.Totalcount=0;
  }
NumberTechniques()
  {
    this.navCtrl.push(TechniquesPage); 
     }
 
scores(){

          this.navCtrl.push(ScoresPage); 
  }
 
show_input() {
  //this.show = true;
if(this.show == true){
  this.show = false;
  }
  else
  {
  this.show = true;
  }
}

show_input1() {
  //this.show = true;
if(this.show1 == true){
  this.show1 = false;
  }
  else
  {
  this.show1 = true;
  }
}

show_input2() {
  //this.show = true;
if(this.show2 == true){
  this.show2 = false;
  }
  else
  {
  this.show2 = true;
  }
}

check1Count(){ 
   this.Counter1++;
}
check1(){
     this.Counter1++;

    if(this.enteredNumber === '19746845'){
         let toast = this.toastCtrl.create({
      message: 'Correct',
      duration: 3000
    });
    toast.present();
   
    }
      else {
      let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
      duration: 3000
    });
    toast.present();}}


check2Count(){ 
   this.Counter2++;
}
check2(){
     this.Counter2++;
    if(this.enteredPhone === '0874863042'){
         let toast = this.toastCtrl.create({
      message: 'Correct',
      duration: 3000
    });
    toast.present();
   
    }
    else {
      let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
      duration: 3000
    });
    toast.present();}}


check3Count(){ 
   this.Counter3++;
}
check3(){
     this.Counter3++;
    if(this.enteredName1 === 'Mark' ||this.enteredName1 === 'mark' ||this.enteredName1 === 'MARK' ){
        let toast = this.toastCtrl.create({
      message: 'Correct, You remember Mark',
      duration: 3000
    });
    toast.present();
   
    }
    else {
             let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again',
      duration: 3000
    });
    toast.present();
   
}}

check4Count(){ 
   this.Counter4++;
}
check4(){
     this.Counter4++;
    if(this.enteredName2 === 'Sean' ||this.enteredName2 === 'sean' ||this.enteredName2 === 'SEAN' ){
  
    let toast = this.toastCtrl.create({
      message: 'Correct, You remember Sean',
      duration: 3000
    });
    toast.present();
   
    }
    else {
      let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again',
      duration: 3000
    });
    toast.present();}}
   
check5Count(){ 
   this.Counter5++;
}
check5(){
    this.Counter5++;
    if(this.enteredName3 === 'Lauren' ||this.enteredName3 === 'lauren'||this.enteredName3 === 'LAUREN' ){
      let toast = this.toastCtrl.create({
      message: 'Correct, You remember Lauren',
      duration: 3000
    });
    toast.present(); 
    }
    else {
      let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again',
      duration: 3000
    });
    toast.present();
   
}}

checkTotal(){ 
   this.Totalcount=this.Counter1+this.Counter2+this.Counter3+this.Counter4+this.Counter5;
}

  resetVal(){
     this.Counter1=0;
     this.Counter2=0;
     this.Counter3=0;
     this.Counter4=0;
     this.Counter5=0;
     this.Totalcount=0;
     this.enteredNumber='';
     this.enteredPhone='';
     this.enteredName1='';
     this.enteredName2='';
     this.enteredName3='';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Test2Page');
  }

}
