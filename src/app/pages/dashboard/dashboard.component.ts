import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'app/services/global.service';
// import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  SelfProfile: any;
  SelfWishList: any;
  SecretSantaProfile: any;
  SecretSantaWishList: any;
  RecipientProfile: any;
  RecipientWishList: any;

  showSelfWishList: boolean = false;
  showSecretSantaWishList: boolean = false;
  showRecipientWishList: boolean = false;

  showSelfProfile: boolean = false;
  showSecretSantaProfile: boolean = false;
  showRecipientProfile: boolean = false;

  configSanta:any = {leftTime:30};
  configRecipient:any= {leftTime:30};

  // @ViewChild('cd') private countdown: CountdownComponent;
  // @ViewChild('cd1') private countdown1: CountdownComponent;
  constructor(private gs: GlobalService) {
    let loginUser = JSON.parse(sessionStorage.getItem('loginuser'));
    this.GetWishList(loginUser, (res) => {
      this.showSelfWishList = true;
      if (res.Success) {
        this.SelfWishList = res.data.list;
      }
      else {

      }
    });

    let showDate = new Date(2019, 11, 23, 12, 0, 0);
    this.configRecipient.leftTime = showDate.getTime() / 1000;

    let santaShowDate = new Date(2019, 11, 23, 15, 0, 0);
    this.configSanta.leftTime = santaShowDate.getTime() / 1000;
    // this.countdown.begin();
    // this.countdown1.begin();

    this.GetProfileDetails(loginUser, (res) => {

      if (res.Success) {
        this.SelfProfile = res.data;
        if (this.SelfProfile.Recipient) {
          loginUser.PSNo = this.SelfProfile.Recipient;
          this.GetWishList(loginUser, (resRecipient) => {
            this.showRecipientWishList = true;
            if (resRecipient.Success) {
              this.RecipientWishList = resRecipient.data.list;
            }
          });
        }
        else {
          this.showRecipientWishList = true;
          console.log('Recipient not mapped Yet');
        }
        this.showSelfProfile = true;
        
        if (new Date() >= showDate && res.data.Recipient) {

          loginUser.PSNo = res.data.Recipient;
          this.GetProfileDetails(loginUser, (resRecipient) => {
            if (resRecipient.Success) {
              this.RecipientProfile = resRecipient.data;
            }
            this.showRecipientProfile = true;
          });
        }
        
        
        if (new Date() >= santaShowDate && res.data.SecretSanta) {
          loginUser.PSNo = res.data.SecretSanta;
          this.GetProfileDetails(loginUser, (resSanta) => {
            if (resSanta.Success) {
              this.SecretSantaProfile = resSanta.data;
            }
            this.showSecretSantaProfile = true;
          });

          this.GetWishList(loginUser, (resSanta) => {
            if (resSanta.Success) {
              this.SecretSantaWishList = resSanta.data.list;
              this.showSecretSantaWishList = true;
            }
          });
        }

      }
      else {
        this.gs.ShowHideNotification({
          id: 1,
          type: 'warning',
          strong: '!!Warning!!',
          message: 'Error in loading Data, Try after sometime.',
          icon: 'ui-1_bell-53'
        });
      }
    });

  }

  ngOnInit() {
  }

  GetProfileDetails = (loginUser, callBackFunc) => {
    this.gs.httpCall('Post', 'GetEmpProfile', loginUser).subscribe(callBackFunc);
  }

  GetWishList = (loginUser, callBackFunc) => {
    this.gs.httpCall('Post', 'GetEmpWishlist', loginUser).subscribe(callBackFunc);
  }

  SaveWishList = (data: any) => {
    console.log(data);
    let userData = JSON.parse(sessionStorage.getItem('loginuser'));
    userData.WishList = data;
    this.gs.httpCall('Post', 'UpdateEmpWishList', userData).subscribe((res) => {
      if (res.Success) {
        this.gs.ShowHideNotification({
          id: 1,
          type: 'success',
          strong: '!!Success!!',
          message: 'You have successfully Updated your Wishlist.',
          icon: 'ui-2_like'
        });
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

  SaveProfile = (data: any) => {
    console.log(data);
    this.gs.httpCall('Post', 'UpdateEmpProfile', data).subscribe((res) => {
      if (res.Success) {
        this.gs.ShowHideNotification({
          id: 1,
          type: 'success',
          strong: '!!Success!!',
          message: 'You have successfully Updated your Profile.',
          icon: 'ui-2_like'
        });
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
