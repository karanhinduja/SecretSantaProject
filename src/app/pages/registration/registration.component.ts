import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GlobalService } from 'app/services/global.service';
import { RegistrationApiModel } from 'app/shared/models/Registration';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  focus6;

  registrationForm: FormGroup;
  constructor(private gs: GlobalService, private router:Router) {

    this.registrationForm = new FormGroup({
      PSNo: new FormControl(''),
      FullName: new FormControl(''),
      Mobile: new FormControl(''),
      Email: new FormControl(''),
      Department: new FormControl(''),
      Password: new FormControl(''),
      ConfirmPassword: new FormControl('')
    });

  }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registrationForm.value);
    let data: RegistrationApiModel = {
      deptId: this.registrationForm.value.Department,
      email: this.registrationForm.value.Email,
      id: this.registrationForm.value.PSNo,
      name: this.registrationForm.value.FullName,
      mobile: this.registrationForm.value.Mobile,
      password: this.registrationForm.value.Password
    };

    this.registerUser(data).subscribe((res)=>{
      console.log(res);
this.router.navigateByUrl('Dashboard');
      
    });

  }

  registerUser(data: RegistrationApiModel): Observable<any> {
    return this.gs.httpCall('Post', 'create', data);
  }

}
