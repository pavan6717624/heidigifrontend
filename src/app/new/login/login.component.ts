import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  phoneNumber: any = "+919449840144";
  reCaptchaVerifier: any;


  configOtp = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '35px',
      height: '35px',
    },
  };

  onOtpChange(otp:any)
  {
    alert(otp);
  }

  handleClick()
  {
    alert('hanmdle');
  }



config=
{
  
    apiKey: "AIzaSyBPm243oMfgHmUkBttxuyTUDQlZadmbOxY",
    authDomain: "phone-auth-6ac49.firebaseapp.com",
    projectId: "phone-auth-6ac49",
    storageBucket: "phone-auth-6ac49.appspot.com",
    messagingSenderId: "1033086931623",
    appId: "1:1033086931623:web:3e172faaef2253cedec182"
  
}

  constructor(private route: Router) {}

  ngOnInit() {

    firebase.initializeApp(this.config);

  }

  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );

    console.log(this.reCaptchaVerifier);

    console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult:any) => {

          this.route.navigate(['/code']);

      })
      .catch((error:any) => {
        console.log(error.message);
        
      });
  }

}
