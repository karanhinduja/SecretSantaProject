import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GlobalService } from 'app/services/global.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


    focus;
    focus1;
    focus3;

    loginForm: FormGroup;
    constructor(private gs: GlobalService, private router: Router) {

        this.loginForm = new FormGroup({
            PSNo: new FormControl(''),
            CompanyCode: new FormControl(''),
            Password: new FormControl('')
        });
    }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.remove('navbar-transparent');
    }


    onSubmit() {
        // TODO: Use EventEmitter with form value
        this.gs.httpCall('post', 'login', this.loginForm.value).subscribe((res) => {
            let loginUser = { CompanyCode: this.loginForm.value.CompanyCode, PSNo: this.loginForm.value.PSNo };
            sessionStorage.setItem('loginuser', JSON.stringify(loginUser));
            if (res.Success) {
                this.gs.ShowHideNotification({
                    id: 1,
                    type: 'success',
                    strong: '!!Success!!',
                    message: 'You have successfully Login.',
                    icon: 'ui-2_like'
                });
                this.router.navigateByUrl('Dashboard');
            }
            else {
                this.gs.ShowHideNotification({
                    id: 1,
                    type: 'warning',
                    strong: '!!Warning!!',
                    message: 'Incorrect Credentials',
                    icon: 'ui-1_bell-53'
                });
            }
        });

    }

}
