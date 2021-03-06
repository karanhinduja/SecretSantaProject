import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PagesModule } from './pages/pages.module';
import { NotificationComponent } from './components/notification/notification.component';
// import { CountdownTimerModule  } from 'ngx-countdown-timer';

@NgModule({
    declarations: [
        AppComponent,
        // NavbarComponent,
        LayoutComponent,
        FooterComponent,
        LoginComponent,
        RegistrationComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        PagesModule,
        ReactiveFormsModule,
        // CountdownTimerModule.forRoot() 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
