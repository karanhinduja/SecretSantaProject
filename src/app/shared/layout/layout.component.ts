import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    showOutterFooter = false;
    private _router: Subscription;
    constructor(private router: Router, private element: ElementRef, public location: Location) { }

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
