import { Routes, RouterModule } from "@angular/router";

// import { AuthenticationComponent } from "./auth/authentication.component";
// import { AUTH_ROUTES } from "./auth/auth.routes";

import { HomeComponent } from "./home/home.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'messages', component: MessagesComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
