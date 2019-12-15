import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

}

}
