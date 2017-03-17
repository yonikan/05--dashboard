"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var error_component_1 = require("./errors/error.component");
var error_service_1 = require("./errors/error.service");
var home_module_1 = require("./home/home.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var messages_module_1 = require("./messages/messages.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            error_component_1.ErrorComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_1.routing,
            http_1.HttpModule,
            home_module_1.HomeModule,
            dashboard_module_1.DashboardModule,
            messages_module_1.MessagesModule
        ],
        providers: [
            error_service_1.ErrorService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
