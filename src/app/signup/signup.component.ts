import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customButtonClick(realButton: HTMLInputElement)
  {
    realButton.click();
  }

  customButtonChange(realButton: any, customText: HTMLSpanElement)
  {
    if(realButton.value) {
      customText.textContent = realButton.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
      customText.textContent = "No file chosen";
    }
  }
}
