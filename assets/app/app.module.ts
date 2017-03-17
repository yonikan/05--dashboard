import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "./app.routing";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
// import { AuthenticationComponent } from "./auth/authentication.component";
// import { LogoutComponent } from "./auth/logout/logout.component";
// import { SignupComponent } from "./auth/signup/signup.component";
// import { SigninComponent } from "./auth/signin/signin.component";
// import { AuthService } from "./auth/auth.service";

import { HomeModule } from "./home/home.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { MessagesModule } from "./messages/messages.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorComponent
        // AuthenticationComponent,
        // LogoutComponent,
        // SignupComponent,
        // SigninComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        HttpModule,
        HomeModule,
        DashboardModule,
        MessagesModule
    ],
    providers: [
      ErrorService
      // AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
