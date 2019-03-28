webpackJsonp([9],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewTaskModalPage = /** @class */ (function () {
    function NewTaskModalPage(viewCtrl, toastCtrl, formBuilder, firebaseService, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create();
    }
    NewTaskModalPage.prototype.ionViewWillLoad = function () {
        this.resetFields();
    };
    NewTaskModalPage.prototype.resetFields = function () {
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            age: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            deficit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    NewTaskModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewTaskModalPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            age: value.age,
            deficit: value.deficit
        };
        this.firebaseService.createTask(data)
            .then(function (res) {
            _this.resetFields();
            _this.viewCtrl.dismiss();
        });
    };
    NewTaskModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-task-modal',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/new-task-modal/new-task-modal.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-buttons start>\n      <!--<button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-arrow-back"></ion-icon>\n      </button> -->\n    </ion-buttons>\n    <ion-title>\n      Create Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--<div>\n    <ion-row no-padding>\n      <ion-col no-padding col-6 offset-3>\n        <img [src]="image" alt="this is the image"/>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">Change Picture</button>\n      </ion-col>\n    </ion-row>\n  </div>-->\n\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="official">First Name</ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    \n\n    <ion-item>\n      <ion-label floating color="official">Surname</ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating color="official">Age</ion-label>\n      <ion-input type="text" formControlName="age" class="form-control" required></ion-input>\n    </ion-item>\n\n     <ion-item>\n      <ion-label floating color="official">Memory Deficit</ion-label>\n      <ion-input type="text" formControlName="deficit" class="form-control" required></ion-input>\n    </ion-item>\n\n    <button style="background-color: #3bce8f" class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Create</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/new-task-modal/new-task-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NewTaskModalPage);
    return NewTaskModalPage;
}());

//# sourceMappingURL=new-task-modal.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPage = /** @class */ (function () {
    function DetailsPage(navParams, alertCtrl, viewCtrl, toastCtrl, formBuilder, imagePicker, firebaseService, loadingCtrl) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.imagePicker = imagePicker;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.loading = this.loadingCtrl.create();
    }
    DetailsPage.prototype.ionViewWillLoad = function () {
        this.getData();
    };
    DetailsPage.prototype.getData = function () {
        this.item = this.navParams.get('data');
        this.image = this.item.image;
        this.validations_form = this.formBuilder.group({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            age: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.age, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            deficit: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.item.deficit, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
        });
    };
    DetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetailsPage.prototype.onSubmit = function (value) {
        var _this = this;
        var data = {
            title: value.title,
            description: value.description,
            age: value.age,
            deficit: value.deficit
        };
        this.firebaseService.updateTask(this.item.id, data)
            .then(function (res) {
            _this.viewCtrl.dismiss();
        });
    };
    DetailsPage.prototype.delete = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to delete ' + this.item.title + '?',
            buttons: [
                {
                    text: 'No',
                    handler: function () { }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.firebaseService.deleteTask(_this.item.id)
                            .then(function (res) { return _this.viewCtrl.dismiss(); }, function (err) { return console.log(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    DetailsPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission()
            .then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    DetailsPage.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        this.loading.present();
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        var randomId = Math.random().toString(36).substr(2, 5);
        console.log(randomId);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image, randomId)
            .then(function (photoURL) {
            _this.image = photoURL;
            _this.loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: 'Image was updated successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/details/details.html"*/'<ion-header>\n  <ion-navbar  >\n    <ion-title>\n      My Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form class="new-user-form" [formGroup]="validations_form" (ngSubmit)="onSubmit(validations_form.value)">\n    <ion-item>\n      <ion-label floating color="official"><b>First Name</b></ion-label>\n      <ion-input type="text" formControlName="title" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="official"><b>Surname</b></ion-label>\n      <ion-input type="text" formControlName="description" class="form-control" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating color="official"><b>Age</b></ion-label>\n      <ion-input type="text" formControlName="age" class="form-control" required></ion-input>\n    </ion-item>\n        <ion-item>\n      <ion-label floating color="official"><b>Memory Deficit</b></ion-label>\n      <ion-input type="text" formControlName="deficit" class="form-control" required></ion-input>\n    </ion-item>\n\n </form>\n  <!--\n    <button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n \n\n  <button class="form-action-button" ion-button block color="danger" (click)="delete()">Delete</button>\n-->\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/details/details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div style="text-align: center;" >\n<h3> This application has been developed as part of a computer science and software engineering final year project at Maynooth University.</h3>\n<h3> The information in this application has alll been taken from evidence based research</h3>\n<h3> Using this application cannot determine if you have any sort of memory problems.</h3>\n<h3> If you are worried about your memory, visit your GP.</h3>\n<ion-img src="../assets/imgs/MU_Logo.PNG"></ion-img>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipsPage = /** @class */ (function () {
    function TipsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TipsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TipsPage');
    };
    TipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tips',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/tips/tips.html"*/'<!--\n  Generated template for the TipsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Memory Tips</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<div class="fullpage">\n\n\n<p class="exercise" style="color: #3bce8f;">\n<b> Some of the main factors that influence brain health is someones health and how much exercise they do. </b></p>\n	\n<p class="heading" ><b>__________________________</b></p>\n\n	<p class="heading" style="color: #3bce8f;">\n<b>Below are some tips to help you get through day to day life</b>\n</p>\n\n\n\n<p class="tipName">\n	<b>1) Use a calendar at home.</b> \n</p>\n<div class="tip" padding>\n<p>You should get a large wall calendar that you check every single morning. The calendar should contain all important events. Write all appointmennts in this calendar. Dont forget to copy everything at the start of each new year.\n</p> \n</div>\n\n<p class="tipName">\n	<b>2) Use a Notebook</b>\n</p>\n<div class="tip" padding>\n<p>\nA notebook is portable so you can bring it with you, so that you dont forget to do things. You should try and get into the habit of using the notebook. You can also have a section to reference phone numbers and addresses. \n</p>\n</div>\n\n<p class="tipName">\n	<b>3) Managing medication</b>\n</p>\n<div class="tip" padding>\n<p> \nThe best way to manage your medication if you suffer from memory probelms is to use a pillbox. You should use a weekly pillbox. This ensures that you dont double-dose and you dont forget to take them.\nYou should also associate taking medication with a daily task. You could try to get into the habit of taking medication every morning when you brush your teeth.\n</p>\n\n<p><b> When taking medicationion you should stop for a second and think "Im taking Friday\'s medication". This means it is more likely for you to remember taking the medication.</b></p>\n</div>\n\n<p class="tipName">\n<b>4)External Memory Aids</b>\n</p>\n<div class="tip" padding>\n<p>\nThere are many things you can use in day-to-day life that will make it easier. Below are some examples.\n</p>\n<p class="points">\nShopping lists- so you dont forget what you need to buy.\n</p>\n<p class="points">\nKitchen timer- Alarms are useful reminders so that you do not forget about what you are cooking.\n</p>\n<p class="points">\nYour Hand - If you need to remember something important, that you think you may forget you should write it on your hand.\n</p>	\n</div>\n<p class="heading" ><b>__________________________</b></p>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/tips/tips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TipsPage);
    return TipsPage;
}());

//# sourceMappingURL=tips.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test2_test2__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizPage = /** @class */ (function () {
    function QuizPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuizPage.prototype.test1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__test_test__["a" /* TestPage */]);
    };
    QuizPage.prototype.test2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__test2_test2__["a" /* Test2Page */]);
    };
    QuizPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuizPage');
    };
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quiz',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/quiz/quiz.html"*/'<!--\n  Generated template for the QuizPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Memory Tests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div style="text-align: center;">\n\n<div class="fullpage">\n<p class="heading"><b>Below are some short quizes that you can choose to test your memory</b></p>\n<p class="heading"><b>Each quiz had the same structure but different content. We recommend consulting the memory techniques page before beginning to try achieve the best score on your first attempt</b></p>\n\n\n  <button ion-button (click)="test1()" class="btn" id="test1">Memory test 1</button>\n\n  <button ion-button (click)="test2()" class="btn" id="test2">Memory test 2</button>\n\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/quiz/quiz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		496,
		8
	],
	"../pages/home/home.module": [
		497,
		7
	],
	"../pages/information/information.module": [
		498,
		6
	],
	"../pages/quiz/quiz.module": [
		499,
		5
	],
	"../pages/scores/scores.module": [
		500,
		4
	],
	"../pages/techniques/techniques.module": [
		501,
		3
	],
	"../pages/test/test.module": [
		503,
		2
	],
	"../pages/test2/test2.module": [
		502,
		1
	],
	"../pages/tips/tips.module": [
		504,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    RegisterPage.prototype.ionViewWillLoad = function () {
        this.validations_form = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
        });
    };
    RegisterPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created. Please log in.";
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegisterPage.prototype.goLoginPage = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title>New Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="form-content">\n  <form class="form" [formGroup]="validations_form"  (ngSubmit)="tryRegister(validations_form.value)">\n\n    <ion-item>\n      <ion-label floating color="official">Email</ion-label>\n      <ion-input type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.email">\n        <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label floating color="official">Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.password">\n        <div class="error-message" *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <button class="submit-btn" ion-button block type="submit" [disabled]="!validations_form.valid">Register</button>\n    <label class="error-message">{{errorMessage}}</label>\n    <label class="success-message">{{successMessage}}</label>\n  </form>\n  <p class="go-to-login">Already have an account?\n   <a style="color: #3bce8f;" (click)="goLoginPage()">Try to Log In.</a></p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_task_modal_new_task_modal__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, modalCtrl, authService, firebaseService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.firebaseService = firebaseService;
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    MenuPage.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getTasks()
            .then(function (tasks) {
            _this.items = tasks;
        });
    };
    MenuPage.prototype.createprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_task_modal_new_task_modal__["a" /* NewTaskModalPage */]);
    };
    MenuPage.prototype.viewDetails = function (id, item) {
        // debugger
        var data = {
            title: item.title,
            description: item.description,
            age: item.age,
            deficit: item.deficit
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], {
            data: data
        });
    };
    MenuPage.prototype.openNewUserModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__new_task_modal_new_task_modal__["a" /* NewTaskModalPage */]);
        modal.onDidDismiss(function (data) {
            _this.getData();
        });
        modal.present();
    };
    MenuPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    MenuPage.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/menu/menu.html"*/'<ion-header>\n\n    <ion-navbar>\n    <ion-title>Profile</ion-title>\n   </ion-navbar>\n    \n\n</ion-header>\n\n<ion-content class="list-mini-content">\n  <div class="list-mini">\n    <ion-list>\n      <ion-item *ngFor="let item of items" (click)="viewDetails(item.payload.doc.id,item.payload.doc.data())">\n      <!--  <ion-thumbnail item-start>\n          <img [src]="item.payload.doc.data().image">\n        </ion-thumbnail>-->\n        <h2>{{item.payload.doc.data().title}}</h2>\n        <button style="color: #3bce8f" ion-button clear item-end><b>Details</b></button>\n      </ion-item>\n    </ion-list>\n  </div>\n<div style="text-align: center;">\n  <button ion-button (click)="createprofile()" class="btn">Create My Profile</button>\n</div>\n</ion-content>\n<ion-footer (click)="home()">\n  <ion-toolbar color="#3bce8f">\n    <ion-title style=" text-align: center;" >Home</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(420);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_details_details__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_task_modal_new_task_modal__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_test_test__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_test2_test2__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_techniques_techniques__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_information_information__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tips_tips__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_quiz_quiz__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_scores_scores__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_about__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_image_picker__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_services_firebase_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_services_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_firestore__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_storage__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__environment_environment__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_new_task_modal_new_task_modal__["a" /* NewTaskModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_test2_test2__["a" /* Test2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tips_tips__["a" /* TipsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_techniques_techniques__["a" /* TechniquesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_scores_scores__["a" /* ScoresPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scores/scores.module#ScoresPageModule', name: 'ScoresPage', segment: 'scores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/techniques/techniques.module#TechniquesPageModule', name: 'TechniquesPage', segment: 'techniques', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test2/test2.module#Test2PageModule', name: 'Test2Page', segment: 'test2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tips/tips.module#TipsPageModule', name: 'TipsPage', segment: 'tips', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_27__environment_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_storage__["a" /* AngularFireStorageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_new_task_modal_new_task_modal__["a" /* NewTaskModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_test2_test2__["a" /* Test2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tips_tips__["a" /* TipsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_techniques_techniques__["a" /* TechniquesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_scores_scores__["a" /* ScoresPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_21__pages_services_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_22__pages_services_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_storage__ = __webpack_require__(246);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FirebaseService = /** @class */ (function () {
    function FirebaseService(afs) {
        this.afs = afs;
    }
    FirebaseService.prototype.getTasks = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.snapshotChangesSubscription = _this.afs.collection('people').doc(currentUser.uid).collection('tasks').snapshotChanges()
                .subscribe(function (snapshots) {
                resolve(snapshots);
            });
        });
    };
    FirebaseService.prototype.unsubscribeOnLogOut = function () {
        //remember to unsubscribe from the snapshotChanges
        // debugger;
        this.snapshotChangesSubscription.unsubscribe();
    };
    FirebaseService.prototype.updateTask = function (taskKey, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).set(value)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    FirebaseService.prototype.deleteTask = function (taskKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('people').doc(currentUser.uid).collection('tasks').doc(taskKey).delete()
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    FirebaseService.prototype.createTask = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('people').doc(currentUser.uid).collection('tasks').add({
                title: value.title,
                description: value.description,
                age: value.age,
                deficit: value.deficit
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    FirebaseService.prototype.SaveScore = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            _this.afs.collection('people').doc(currentUser.uid).collection('scores').add({
                Totalcount: value.Totalcount
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    FirebaseService.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    ;
    FirebaseService.prototype.uploadImage = function (imageURI, randomId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["storage"]().ref();
            var imageRef = storageRef.child('image').child(randomId);
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL()
                        .then(function (res) { return resolve(res); });
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirebaseService);
    return FirebaseService;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCrxzACGm-rz_8QQgyfrgdDYZTATJEO9lE",
        authDomain: "firebassepro-e7b81.firebaseapp.com",
        databaseURL: "https://firebassepro-e7b81.firebaseio.com",
        projectId: "firebassepro-e7b81",
        storageBucket: "firebassepro-e7b81.appspot.com",
        messagingSenderId: "367599169933"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechniquesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TechniquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TechniquesPage = /** @class */ (function () {
    function TechniquesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TechniquesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TechniquesPage');
    };
    TechniquesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-techniques',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/techniques/techniques.html"*/'<!--\n  Generated template for the TechniquesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n	<ion-title>Memory Techniques</ion-title>  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p class="heading" ><b>__________________________</b></p>\n<div >\n\n	<div class="point"><p><b>1. Numbers</b></p></div>\n	<div padding>\n		<h4 style="text-align: center;"><b>Below there are some methods for trying to remember numbers such as phone numbers</b></h4>\n		<div padding class="numbers">\n			<div>	\n				<p>\n					When looking at numbers there is two different ways to try remember them.\n					The first is to check if the number has something memorable.\n					An example of theis would be: 19162000\n					the above number could be broken up into two separate parts:</p>\n				<p>\n					<b>1916[Easter Rising], 2000[Millenium]</b>\n				</p>\n				<p>\n					<b>19162000</b>\n				</p>\n			</div>\n\n			<div>\n				<p>\n					Another way of remembering numbers is to break them up into smaller sections that may not normally be memorable. A phone number becomes far easier to learn once it has been divided.\n					An example of this would be: \n					1800456987\n					The above number would be easier to learn if broken into three sections:\n				</p>\n				<p>\n					<b>1800[1] 456[2] 987[3]</b>\n				</p>\n				<p>\n					<b>1800456987</b>	\n				</p>\n\n			</div>\n		</div>\n	</div>\n\n	<div class="point"><p><b>2. People</b></p></div>		\n	<div padding>	\n		<h4 style="text-align: center;"><b> Below are some ways to remember names</b></h4>\n		<div padding class="names">\n			<div>\n				<p>\n					To try remember someone\'s name you should try the following tips:</p>\n\n					<p>1.When meeting someone for thefirst time you should repeat their name out loud.</p> \n						\n						<p><b>For Example: Aften being introduced to Stephen you could ask. "So stephen, what do you work as?".</b></p> \n					\n					<p>2.You could try to associate the person with a place or a job. so when Stephen answers your question, try to associate his answer with his name</p> \n				    \n					    <p><b>"Stephen the carpenter"</b></p>\n					\n					<p>3.Repeat their name silently to yourself.</p>\n			</div>\n		</div>\n	</div>\n</div>	\n<p class="heading" ><b>__________________________</b></p>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/techniques/techniques.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TechniquesPage);
    return TechniquesPage;
}());

//# sourceMappingURL=techniques.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(firebaseService) {
        this.firebaseService = firebaseService;
    }
    AuthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser) {
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signOut()
                    .then(function () {
                    _this.firebaseService.unsubscribeOnLogOut();
                    resolve();
                }).catch(function (error) {
                    reject();
                });
            }
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__firebase_service__["a" /* FirebaseService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__information_information__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    LoginPage.prototype.ionViewWillLoad = function () {
        this.validations_form = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ])),
        });
    };
    LoginPage.prototype.information = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__information_information__["a" /* InformationPage */]);
    };
    LoginPage.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.errorMessage = err.message;
        });
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/login/login.html"*/'<ion-header>\n<div class="logo">\n  <ion-navbar [hideBackButton]="true" >\n      <ion-title>   <img padding-top class="mylogo" src="../../assets/imgs/leaf1.PNG" alt="Memory-Leaf"></ion-title>\n  </ion-navbar>\n</div>\n</ion-header>\n\n<ion-content padding class="form-content">\n  <form class="form" [formGroup]="validations_form"  (ngSubmit)="tryLogin(validations_form.value)">\n\n    <ion-item>\n      <ion-label floating color="official">Email</ion-label>\n      <ion-input type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.email">\n        <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label floating color="official">Password</ion-label>\n      <ion-input type="password" formControlName="password" class="form-controll" required></ion-input>\n    </ion-item>\n    <div class="validation-errors">\n      <ng-container *ngFor="let validation of validation_messages.password">\n        <div class="error-message" *ngIf="validations_form.get(\'password\').hasError(validation.type) && (validations_form.get(\'password\').dirty || validations_form.get(\'password\').touched)">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <button class="submit-btn" ion-button block type="submit" [disabled]="!validations_form.valid" id="Login">Log In</button>\n    <label class="error-message">{{errorMessage}}</label>\n  </form>\n  <p class="go-to-register">\n    No account yet? \n    <a style="color: #3bce8f;" (click)="goRegisterPage()">Create an account.</a>\n  </p>\n<div class="info">\n   <button style="text-align: center;" ion-button (click)="information()" class="btn" id="Memory_info_anon">Memory Information</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_task_modal_new_task_modal__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_test__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test2_test2__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__techniques_techniques__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__information_information__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tips_tips__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quiz_quiz__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navParams, navCtrl, modalCtrl, authService, firebaseService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.firebaseService = firebaseService;
    }
    HomePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_task_modal_new_task_modal__["a" /* NewTaskModalPage */]);
    };
    HomePage.prototype.information = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__information_information__["a" /* InformationPage */]);
    };
    HomePage.prototype.tips = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__tips_tips__["a" /* TipsPage */]);
    };
    HomePage.prototype.quiz = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__quiz_quiz__["a" /* QuizPage */]);
    };
    HomePage.prototype.test1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__test_test__["a" /* TestPage */]);
    };
    HomePage.prototype.test2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__test2_test2__["a" /* Test2Page */]);
    };
    HomePage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__menu_menu__["a" /* MenuPage */]);
    };
    HomePage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.details = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */]);
    };
    HomePage.prototype.techniques = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__techniques_techniques__["a" /* TechniquesPage */]);
    };
    HomePage.prototype.logout = function () {
        /* this.authService.doLogout()
         .then(res => {
           this.navCtrl.push(LoginPage)});*/
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<div class="logo">\n  <ion-navbar>\n  <ion-title >   <img  padding-top class="mylogo" src="../../assets/imgs/leaf1.PNG" alt="Memory-Leaf"></ion-title>\n  </ion-navbar>\n</div>\n</ion-header>\n\n<ion-content padding>\n  <div class="fullpage">\n  <h3 style="color: #3bce8f;"> <b>Welcome to Memory-Leaf</b></h3>\n<div style="text-align: center;">\n<p class="intro"><b> Memory-Leaf is an application that aims to try improve the memory of people suffering from memory illnesses.</b></p>\n<p class="intro"><b> The aim is that if we can improve your memory, it will make your life just a little bit easier</b></p>\n</div>\n\n   <button ion-button (click)="tips()" class="btn" id="tips">Tips</button>\n\n\n   <button ion-button (click)="techniques()" class="btn" id="techhniques">Techniques</button>\n\n   <button ion-button (click)="information()" class="btn" id="information">Information</button>\n\n\n   <button ion-button (click)="quiz()" class="btn" id="tests">Memory Tests</button>\n\n\n   <button ion-button (click)="menu()" class="btn" id="profile">My Profile</button>\n\n   <button ion-button (click)="about()" class="btn" id="profile">About</button>\n\n  <button ion-button (click)="logout()" class="btn" id="logout">Log Out</button>\n\n</div>\n \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__techniques_techniques__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InformationPage.prototype.NumberTechniques = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__techniques_techniques__["a" /* TechniquesPage */]);
    };
    InformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationPage');
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/information/information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="text-align: center;">\n  <div padding class="bground">\n    <div>\n <div class="facts">\n  <h1 style="font-size: 50px; color: black;">Memory facts</h1>\n</div>\n\n  <h5> Memory is not perfect.</h5>\n    <h5> Learned techniques can improve your memory</h5>\n      <h5> Everybody has memory problems </h5>	\n <p style="text-align: center;">_______________________</p>\n\n\n <h4> There are different types of memory:</h4>\n\n <div class="memtype" style="font-size: 18px">\n <p><b>Short term memory:</b> is retaining a small amount of information over a period of a few seconds.</p>\n<p><b>Working memory:</b> allows us to keep things in mind.</p>\n<p><b>Long term memory:</b> the capacity to store information over long periods of time.</p>\n<p><b>Semantic memory:</b> allows us to store our accumulative knowledge of the world.</p>\n<p><b>Episodic memory:</b> allows us to remember certain specific events</p>\n</div>\n\n<p style="text-align: center; ">_______________________</p>\n<p style="font-size: 18px">If you want a better understanding of memory, there are many resources available from memory experts. </p>\n<p style="font-size: 18px">One recommended resource would be - "Memory" by Baddeley, Eysenck and Anderson</p>\n\n<p style="text-align: center;">_______________________</p>\n<p><b>If you are any way concerned about your memory please visit your Doctor.</b> </p>\n <p style="text-align: center;">_______________________</p>\n\n <h5> If you want to see some of the memory techniques that can help you to improve your memory click on the button below!</h5>\n\n </div>\n</div>\n<div>\n <button ion-button  (click)="NumberTechniques()" class="btn">Memory Techniques</button>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/information/information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scores_scores__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__techniques_techniques__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(viewCtrl, toastCtrl, navCtrl, navParams, formBuilder, firebaseService, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.loadingCtrl = loadingCtrl;
        this.Counter1 = 0;
        this.Counter2 = 0;
        this.Counter3 = 0;
        this.Counter4 = 0;
        this.Counter5 = 0;
        this.Totalcount = 0;
    }
    TestPage.prototype.NumberTechniques = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__techniques_techniques__["a" /* TechniquesPage */]);
    };
    TestPage.prototype.show_input = function () {
        //this.show = true;
        if (this.show == true) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    };
    TestPage.prototype.scores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__scores_scores__["a" /* ScoresPage */]);
    };
    TestPage.prototype.show_input1 = function () {
        //this.show = true;
        if (this.show1 == true) {
            this.show1 = false;
        }
        else {
            this.show1 = true;
        }
    };
    TestPage.prototype.show_input2 = function () {
        //this.show = true;
        if (this.show2 == true) {
            this.show2 = false;
        }
        else {
            this.show2 = true;
        }
    };
    TestPage.prototype.check1Count = function () {
        this.Counter1++;
    };
    TestPage.prototype.check1 = function () {
        this.Counter1++;
        if (this.enteredNumber === '19161945') {
            var toast = this.toastCtrl.create({
                message: 'Correct',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.check2Count = function () {
        this.Counter2++;
    };
    TestPage.prototype.check2 = function () {
        this.Counter2++;
        if (this.enteredPhone === '1800341341') {
            var toast = this.toastCtrl.create({
                message: 'Correct',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.check3Count = function () {
        this.Counter3++;
    };
    TestPage.prototype.check3 = function () {
        this.Counter3++;
        if (this.enteredName1 === 'John' || this.enteredName1 === 'john' || this.enteredName1 === 'JOHN') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember John',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.check4Count = function () {
        this.Counter4++;
    };
    TestPage.prototype.check4 = function () {
        this.Counter4++;
        if (this.enteredName2 === 'Lisa' || this.enteredName2 === 'lisa' || this.enteredName2 === 'LISA') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember Lisa',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.check5Count = function () {
        this.Counter5++;
    };
    TestPage.prototype.check5 = function () {
        this.Counter5++;
        if (this.enteredName3 === 'Katie' || this.enteredName3 === 'katie' || this.enteredName3 === 'KATIE') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember Katie',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    TestPage.prototype.checkTotal = function () {
        this.Totalcount = this.Counter1 + this.Counter2 + this.Counter3 + this.Counter4 + this.Counter5;
    };
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
    TestPage.prototype.resetVal = function () {
        this.Counter1 = 0;
        this.Counter2 = 0;
        this.Counter3 = 0;
        this.Counter4 = 0;
        this.Counter5 = 0;
        this.Totalcount = 0;
        this.enteredNumber = '';
        this.enteredPhone = '';
        this.enteredName1 = '';
        this.enteredName2 = '';
        this.enteredName3 = '';
    };
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
        //this.resetFields()
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/test/test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     <ion-title>Memory Test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="memTech">\n\n  <button ion-button  (click)="NumberTechniques()" class="btn">Memory Techniques</button>\n  </div>\n\n  <div padding-top class="EX">\n    <h3> 1. </h3>\n  </div>\n  <div class="numberCSS">\n<p> Are you able to remember phone numbers?</p> \n<p>Try to memorise the following number:</p>\n \n\n\n<button ion-button (click)="show_input()" class="btn" >Show/Hide number</button>\n<div *ngIf="show">\n <h5> 19161945</h5>\n\n  </div>\n  <div padding-bottom>\n  <ion-item>\n  <ion-input text-center placeholder="Enter Number" [(ngModel)]="enteredNumber" ></ion-input>\n</ion-item>\n<button ion-button (click)="check1()" class="btn">Check</button> \n<button ion-button (click)="check1Count()" class="btnCount">{{Counter1}}</button>\n</div>\n\n <div padding-top class="EX">\n    <h3> 2. </h3>\n  </div>\n\n\n\n  </div>\n<div class="phoneCSS">\n\n<p>Now show the phone number and try to remember it, then hide it and see if you can remember it</p>\n<button ion-button (click)="show_input1()" class="btn" >Show/Hide phone number</button>\n<div *ngIf="show1">\n <h5> 1800341341</h5>\n\n  </div>\n\n\n\n<div>\n    <p> Enter the number you memorised:</p>\n\n</div>\n\n<div padding-bottom>\n<ion-item>\n<ion-input text-center placeholder="Enter Phone Number" [(ngModel)]="enteredPhone" ></ion-input>\n</ion-item>\n<button  ion-button (click)="check2()" class="btn">Check</button>\n<button ion-button (click)="check2Count()" class="btnCount">{{Counter2}}</button>\n</div>\n</div>\n\n\n\n  <div padding-top class="EX">\n    <h3> 3. </h3>\n  </div>\n <div class="names">\n  <p>Look at the following pictures and the names below. Try to remember the name of each person. When you\'re ready, hide the names and enter the correct name below each picture</p></div>\n<div class="names">\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-img src="../assets/imgs/person1.jpg" ></ion-img>\n    </ion-col>\n    <ion-col>\n       <ion-img src="../assets/imgs/person2b.jpg" ></ion-img>\n    </ion-col>\n    <ion-col>\n       <ion-img src="../assets/imgs/person3b.jpg"></ion-img>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n</div>\n\n\n<div class="names">\n<div *ngIf="show2">\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <h3>John</h3>\n    </ion-col>\n    <ion-col>\n    <h3>Lisa</h3>\n    </ion-col>\n    <ion-col>\n    <h3>Katie</h3>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n</div>\n<button ion-button (click)="show_input2()" class="btn">Show/Hide Names</button>\n\n\n<h3 padding-top>A</h3>\n<ion-img src="../assets/imgs/person1.jpg" ></ion-img>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName1"></ion-input>\n</ion-item>\n<button  ion-button (click)="check3()" class="btn">Check</button>\n<button ion-button (click)="check3Count()" class="btnCount">{{Counter3}}</button>\n\n\n<h3 padding-top>B</h3>\n<ion-img src="../assets/imgs/person2b.jpg" ></ion-img>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName2"></ion-input>\n</ion-item>\n<button  ion-button (click)="check4()" class="btn">Check</button>\n<button ion-button (click)="check4Count()" class="btnCount">{{Counter4}}</button>\n\n\n<h3 padding-top>C</h3>\n<ion-img src="../assets/imgs/person3b.jpg" ></ion-img>\n<div padding-bottom>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName3"></ion-input>\n</ion-item>\n<button  ion-button (click)="check5()" class="btn">Check</button>\n<button ion-button (click)="check5Count()" class="btnCount">{{Counter5}}</button>\n</div>\n\n\n\n\n<h4> To get your total number of tries for all of the questions please click the button below. You should try to have the lowest score possible</h4>\n<button ion-button (click)="checkTotal()" class="btn">Total Tries: {{Totalcount}}</button>\n<h4> Click Reset to start again</h4>\n\n<button ion-button (click)="resetVal()" class="btn">Reset</button>\n\n  <!--<ion-item>\n      <ion-label floating color="primary">Memory Deficit</ion-label>\n      <ion-input type="text" formControlName="Totalcount" class="form-control" required></ion-input>\n    </ion-item>\n\n<button class="form-action-button" ion-button block type="submit" [disabled]="!validations_form.valid">Save</button>\n-->\n<div>\n<button ion-button (click)="scores()" class="btn" id="scores">Scores</button>\n</div>\n<p class="heading" ><b>__________________________</b></p>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_firebase_service__["a" /* FirebaseService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _g || Object])
    ], TestPage);
    return TestPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ScoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScoresPage = /** @class */ (function () {
    function ScoresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScoresPage');
    };
    ScoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scores',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/scores/scores.html"*/'<!--\n  Generated template for the ScoresPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>scores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/scores/scores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ScoresPage);
    return ScoresPage;
}());

//# sourceMappingURL=scores.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__techniques_techniques__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scores_scores__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Test2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Test2Page = /** @class */ (function () {
    function Test2Page(toastCtrl, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Counter1 = 0;
        this.Counter2 = 0;
        this.Counter3 = 0;
        this.Counter4 = 0;
        this.Counter5 = 0;
        this.Totalcount = 0;
    }
    Test2Page.prototype.NumberTechniques = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__techniques_techniques__["a" /* TechniquesPage */]);
    };
    Test2Page.prototype.scores = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__scores_scores__["a" /* ScoresPage */]);
    };
    Test2Page.prototype.show_input = function () {
        //this.show = true;
        if (this.show == true) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    };
    Test2Page.prototype.show_input1 = function () {
        //this.show = true;
        if (this.show1 == true) {
            this.show1 = false;
        }
        else {
            this.show1 = true;
        }
    };
    Test2Page.prototype.show_input2 = function () {
        //this.show = true;
        if (this.show2 == true) {
            this.show2 = false;
        }
        else {
            this.show2 = true;
        }
    };
    Test2Page.prototype.check1Count = function () {
        this.Counter1++;
    };
    Test2Page.prototype.check1 = function () {
        this.Counter1++;
        if (this.enteredNumber === '19746845') {
            var toast = this.toastCtrl.create({
                message: 'Correct',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
                duration: 3000
            });
            toast.present();
        }
    };
    Test2Page.prototype.check2Count = function () {
        this.Counter2++;
    };
    Test2Page.prototype.check2 = function () {
        this.Counter2++;
        if (this.enteredPhone === '0874863042') {
            var toast = this.toastCtrl.create({
                message: 'Correct',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
                duration: 3000
            });
            toast.present();
        }
    };
    Test2Page.prototype.check3Count = function () {
        this.Counter3++;
    };
    Test2Page.prototype.check3 = function () {
        this.Counter3++;
        if (this.enteredName1 === 'Mark' || this.enteredName1 === 'mark' || this.enteredName1 === 'MARK') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember Mark',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    Test2Page.prototype.check4Count = function () {
        this.Counter4++;
    };
    Test2Page.prototype.check4 = function () {
        this.Counter4++;
        if (this.enteredName2 === 'Sean' || this.enteredName2 === 'sean' || this.enteredName2 === 'SEAN') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember Sean',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    Test2Page.prototype.check5Count = function () {
        this.Counter5++;
    };
    Test2Page.prototype.check5 = function () {
        this.Counter5++;
        if (this.enteredName3 === 'Lauren' || this.enteredName3 === 'lauren' || this.enteredName3 === 'LAUREN') {
            var toast = this.toastCtrl.create({
                message: 'Correct, You remember Lauren',
                duration: 3000
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Wrong, Please Try Again',
                duration: 3000
            });
            toast.present();
        }
    };
    Test2Page.prototype.checkTotal = function () {
        this.Totalcount = this.Counter1 + this.Counter2 + this.Counter3 + this.Counter4 + this.Counter5;
    };
    Test2Page.prototype.resetVal = function () {
        this.Counter1 = 0;
        this.Counter2 = 0;
        this.Counter3 = 0;
        this.Counter4 = 0;
        this.Counter5 = 0;
        this.Totalcount = 0;
        this.enteredNumber = '';
        this.enteredPhone = '';
        this.enteredName1 = '';
        this.enteredName2 = '';
        this.enteredName3 = '';
    };
    Test2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Test2Page');
    };
    Test2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test2',template:/*ion-inline-start:"/Users/darren/FYP/Final-master/ionic-3/src/pages/test2/test2.html"*/'<!--\n  Generated template for the Test2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Memory Test 2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="memTech">\n\n  <button ion-button  (click)="NumberTechniques()" class="btn">Memory Techniques</button>\n  </div>\n\n  <div padding-top class="EX">\n    <h3> 1. </h3>\n  </div>\n  <div class="numberCSS">\n<p> Are you able to remember phone numbers?</p> \n<p>Try to memorise the following number:</p>\n \n\n\n<button ion-button (click)="show_input()" class="btn" >Show/Hide number</button>\n<div *ngIf="show">\n <h5> 19746845</h5>\n\n  </div>\n  <div padding-bottom>\n  <ion-item>\n  <ion-input text-center placeholder="Enter Number" [(ngModel)]="enteredNumber" ></ion-input>\n</ion-item>\n<button ion-button (click)="check1()" class="btn">Check</button> \n<button ion-button (click)="check1Count()" class="btnCount">{{Counter1}}</button>\n</div>\n\n <div padding-top class="EX">\n    <h3> 2. </h3>\n  </div>\n\n\n\n  </div>\n<div class="phoneCSS">\n\n<p>Now show the phone number and try to remember it, then hide it and see if you can remember it</p>\n<button ion-button (click)="show_input1()" class="btn" >Show/Hide phone number</button>\n<div *ngIf="show1">\n <h5> 0874863042</h5>\n\n  </div>\n\n\n\n<div>\n    <p> Enter the number you memorised:</p>\n\n</div>\n\n<div padding-bottom>\n<ion-item>\n<ion-input text-center placeholder="Enter Phone Number" [(ngModel)]="enteredPhone" ></ion-input>\n</ion-item>\n<button  ion-button (click)="check2()" class="btn">Check</button>\n<button ion-button (click)="check2Count()" class="btnCount">{{Counter2}}</button>\n</div>\n</div>\n\n\n\n  <div padding-top class="EX">\n    <h3> 3. </h3>\n  </div>\n <div class="names">\n  <p>Look at the following pictures and the names below. Try to remember the name of each person. When you\'re ready, hide the names and enter the correct name below each picture</p></div>\n<div class="names">\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-img src="../assets/imgs/person4a.jpg" ></ion-img>\n    </ion-col>\n    <ion-col>\n       <ion-img src="../assets/imgs/person5a.jpg" ></ion-img>\n    </ion-col>\n    <ion-col>\n       <ion-img src="../assets/imgs/person6a.jpg"></ion-img>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n</div>\n\n\n<div class="names">\n<div *ngIf="show2">\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <h3>Mark</h3>\n    </ion-col>\n    <ion-col>\n    <h3>Sean</h3>\n    </ion-col>\n    <ion-col>\n    <h3>Lauren</h3>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n</div>\n<button ion-button (click)="show_input2()" class="btn">Show/Hide Names</button>\n\n\n<h3 padding-top>A</h3>\n<ion-img src="../assets/imgs/person4a.jpg" ></ion-img>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName1"></ion-input>\n</ion-item>\n<button  ion-button (click)="check3()" class="btn">Check</button>\n<button ion-button (click)="check3Count()" class="btnCount">{{Counter3}}</button>\n\n\n<h3 padding-top>B</h3>\n<ion-img src="../assets/imgs/person5a.jpg" ></ion-img>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName2"></ion-input>\n</ion-item>\n<button  ion-button (click)="check4()" class="btn">Check</button>\n<button ion-button (click)="check4Count()" class="btnCount">{{Counter4}}</button>\n\n\n<h3 padding-top>C</h3>\n<ion-img src="../assets/imgs/person6a.jpg" ></ion-img>\n<div padding-bottom>\n<ion-item>\n<ion-input text-center placeholder="Enter Name" [(ngModel)]="enteredName3"></ion-input>\n</ion-item>\n<button  ion-button (click)="check5()" class="btn">Check</button>\n<button ion-button (click)="check5Count()" class="btnCount">{{Counter5}}</button>\n</div>\n\n\n\n\n<h4> To get your total number of tries for all of the questions please click the button below. You should try to have the lowest score possible</h4>\n<button ion-button (click)="checkTotal()" class="btn">Total Tries: {{Totalcount}}</button>\n<h4> Click Reset to start again</h4>\n\n<button ion-button (click)="resetVal()" class="btn">Reset</button>\n<div>\n<button ion-button (click)="scores()" class="btn" id="scores">Scores</button>\n</div>\n<p class="heading" ><b>__________________________</b></p>\n\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/darren/FYP/Final-master/ionic-3/src/pages/test2/test2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Test2Page);
    return Test2Page;
}());

//# sourceMappingURL=test2.js.map

/***/ })

},[297]);
//# sourceMappingURL=main.js.map