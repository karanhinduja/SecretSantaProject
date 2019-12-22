import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
// import { AgmCoreModule } from '@agm/core';

import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { ProfileDetailsComponent } from 'app/components/profile-details/profile-details.component';
import { WishlistDetailsComponent } from 'app/components/wishlist-details/wishlist-details.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        RouterModule,
        HttpClientModule,
        CountdownTimerModule.forRoot() 
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
