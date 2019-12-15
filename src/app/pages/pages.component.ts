import { Component, OnInit, Renderer, Inject, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;
  constructor(private renderer: Renderer, private router: Router, @Inject(DOCUMENT) private document: any, private element: ElementRef, public location: Location) { }
  ngOnInit() {

    var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];

    this.renderer.listenGlobal('window', 'scroll', (event) => {
      const number = window.scrollY;
      var _location = this.location.path();
      _location = _location.split('/')[2];

      if (number > 150 || window.pageYOffset > 150) {
        navbar.classList.remove('navbar-transparent');
      } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
        // remove logic
        navbar.classList.add('navbar-transparent');
      }
    });

    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      } else {
        window.document.activeElement.scrollTop = 0;
      }
      this.navbar.sidebarClose();


    });

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');

  }

}
