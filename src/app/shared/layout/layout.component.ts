import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAlert } from 'app/components/notification/notification.component';
import { GlobalService } from 'app/services/global.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    showOutterFooter = false;
    alert: IAlert;
    private _router: Subscription;
    constructor(private router: Router, private element: ElementRef, public location: Location,
        public gs: GlobalService) {
        this.subscription = this.gs.GetNotificationData().subscribe((res: IAlert) => {
            this.alert = res;
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
      }

    ngOnInit() {

        this._router = this.router.events.filter(event => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                var _location = event.url.split('/')[1];
                if (_location === 'Login' || _location === 'Registration') {
                    this.showOutterFooter = false;
                }
                else {
                    this.showOutterFooter = true;

                }
            });
    }

}
