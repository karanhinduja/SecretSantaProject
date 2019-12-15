import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
// import { AgmCoreModule } from '@agm/core';


import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { ProfileDetailsComponent } from 'app/components/profile-details/profile-details.component';
import { WishlistDetailsComponent } from 'app/components/wishlist-details/wishlist-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        RouterModule,
        // PagesRoutingModule,
        // AgmCoreModule.forRoot({
        //     apiKey: 'YOUR_KEY_HERE'
        // })
    ],
    declarations: [
        PagesComponent,
        DashboardComponent,
        NavbarComponent,
        ProfileDetailsComponent,
        WishlistDetailsComponent
    ]
})
export class PagesModule { }
