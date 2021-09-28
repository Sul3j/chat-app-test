import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  passwordVisibleToggle(passwordInput: HTMLInputElement, passwordEye: HTMLElement){
    if(passwordInput.type == "password"){
      passwordInput.type = "text";
      passwordEye.classList.add("active");
    } else {
      passwordInput.type = "password";
      passwordEye.classList.remove("active");
    }
  }

}
