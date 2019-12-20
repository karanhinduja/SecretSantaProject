import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  focus7;

  @Input()
  public profiledata: any;
  @Input()
  public enableAction: boolean = false;
  @Output() emitOnSubmit = new EventEmitter<string>();

  profile: FormGroup;
  constructor() { 
    
  }

  ngOnInit() {
    let loginUser = JSON.parse(sessionStorage.getItem('loginuser'));
    this.profile = new FormGroup({
      CompanyCode: new FormControl({value:loginUser.CompanyCode, disabled:true}),
      PSNo: new FormControl((this.profiledata)?this.profiledata.PSNo:''),
      FullName: new FormControl((this.profiledata)?this.profiledata.FullName:''),
      Mobile: new FormControl((this.profiledata)?this.profiledata.Mobile:''),
      Email: new FormControl((this.profiledata)?this.profiledata.Email:''),
      Department: new FormControl((this.profiledata)?this.profiledata.Department:''),
      Password: new FormControl(''),
      ConfirmPassword: new FormControl('')
    });
  }

  onSubmit() {
    this.emitOnSubmit.emit(this.profile.getRawValue());
  }

}
