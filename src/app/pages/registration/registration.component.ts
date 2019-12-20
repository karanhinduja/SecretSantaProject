import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GlobalService } from 'app/services/global.service';
import { RegistrationApiModel } from 'app/shared/models/Registration';
import { Observable, Subject, merge } from 'rxjs';
import { Router } from '@angular/router';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

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
  focus7;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  groupFocus$ = new Subject<string>();
  groupClick$ = new Subject<string>();
  companyList: any = [];
  departmentList: any = [];
  @ViewChild('companyCodeInstance') companyCodeInstance: NgbTypeahead;
  @ViewChild('groupNameInstance') groupNameInstance: NgbTypeahead;

  registrationForm: FormGroup;
  constructor(private gs: GlobalService, private router: Router) {

    this.registrationForm = new FormGroup({
      CompanyCode: new FormControl(''),
      PSNo: new FormControl(''),
      FullName: new FormControl(''),
      Mobile: new FormControl(''),
      Email: new FormControl(''),
      Department: new FormControl(''),
      Password: new FormControl(''),
      ConfirmPassword: new FormControl('')
    });

    gs.httpCall('Get', 'GetCompanyList').pipe(map((res) => {
      if (res.Success) {
        return res.data.map(data => data.CompanyCode);
      }
      else {
        return [];
      }
    })).subscribe((data) => {
      this.companyList = data;
    });



  }

  onBlurCompanyCode(event) {
    this.focus7 = false;
    let deparmentData = { CompanyCode: event.target.value };
    debugger;
    this.gs.httpCall('Post', 'GetDepartmentList', deparmentData).pipe(map((res) => {
      if (res.Success) {
        return res.data.map(data => data.Name);
      }
      else {
        return [];
      }
    })).subscribe((data) => {
      this.departmentList = data;
    });
  }

  onFocusCompanyCode(event) {
    this.focus7 = true;
    this.focus$.next(event.target.value);
  }

  onFocusGroupName(event) {
    this.focus6 = true;
    this.groupFocus$.next(event.target.value);
  }

  groupSearch = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.groupClick$.pipe(filter(() => !this.groupNameInstance.isPopupOpen()));
    const inputFocus$ = this.groupFocus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.departmentList
        : this.departmentList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  companySearch = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.companyCodeInstance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.companyList
        : this.companyList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
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

    let data = {
      "CompanyCode": this.registrationForm.value.CompanyCode,
      "Address": "",
      "EmpMaster": {
        "Department": this.registrationForm.value.Department,
        "Email": this.registrationForm.value.Email,
        "FullName": this.registrationForm.value.FullName,
        "Mobile": this.registrationForm.value.Mobile,
        "PSNo": this.registrationForm.value.PSNo,
        "Password": this.registrationForm.value.Password
      }
    }
    this.gs.httpCall('Post', 'Register', data).subscribe((res) => {
      if (res.Success) {
        let loginUser = { CompanyCode: data.CompanyCode, PSNo: data.EmpMaster.PSNo };
        sessionStorage.setItem('loginuser', JSON.stringify(loginUser));
        this.gs.ShowHideNotification({
          id: 1,
          type: 'success',
          strong: '!!Success!!',
          message: 'You have successfully Register.',
          icon: 'ui-2_like'
        });
        this.router.navigateByUrl('Login');
      }
      else {
        this.gs.ShowHideNotification({
          id: 1,
          type: 'warning',
          strong: '!!Warning!!',
          message: res.Message,
          icon: 'ui-1_bell-53'
        });
      }

    });
  }

}
