import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active"><a [routerLink]="['/home']">Home</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/dashboard']">Dashboard</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
                    <li routerLinkActive="active" class="pull-right"><a>Userssss</a></li>
                </ul>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}
