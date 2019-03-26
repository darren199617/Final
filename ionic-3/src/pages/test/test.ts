import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController,  LoadingController,ViewController } from 'ionic-angular';
import { TechniquesPage } from '../techniques/techniques';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
 Counter1: number;
  Counter2: number;
  Counter3: number;
  Counter4: number;
  Counter5: number;
  Totalcount: number;
  validations_form: FormGroup;

  constructor(
  	private viewCtrl: ViewController,
  	public toastCtrl: ToastController,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private formBuilder: FormBuilder,
  	private firebaseService: FirebaseService,
  	private loadingCtrl: LoadingController,

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

    if(this.enteredNumber === '19161945'){
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
    if(this.enteredPhone === '1800341341'){
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
    if(this.enteredName1 === 'John' ||this.enteredName1 === 'john' ||this.enteredName1 === 'JOHN' ){
        let toast = this.toastCtrl.create({
      message: 'Correct, You remember John',
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
    if(this.enteredName2 === 'Lisa' ||this.enteredName2 === 'lisa' ||this.enteredName2 === 'LISA' ){
  
    let toast = this.toastCtrl.create({
      message: 'Correct, You remember Lisa',
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
    if(this.enteredName3 === 'Katie' ||this.enteredName3 === 'katie'||this.enteredName3 === 'KATIE' ){
      let toast = this.toastCtrl.create({
      message: 'Correct, You remember Katie',
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


  /*resetFields(){
  
    this.validations_form = this.formBuilder.group({
      Totalcount: new FormControl('', Validators.required),
     
    });
  }

  onSubmit(value){
    let data = {
      Totalcount: value.Totalcount,
    }
    this.firebaseService.SaveScore(data)
    .then(
      res => {
        this.resetFields();
        this.viewCtrl.dismiss();
      }
    )
  }*/

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
    console.log('ionViewDidLoad TestPage');
      //this.resetFields()

  }

}
