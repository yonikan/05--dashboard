import { Component } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    template: `
      <div class="col-md-8 col-md-offset-2">
          <div class="row">
              <h1>dashboard</h1>
          </div>
         <hr>
           <div class="row">
              <app-widget>
              </app-widget>
          </div>
       </div>
    `
})
export class DashboardComponent {

}
