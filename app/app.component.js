"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n       <div>\n        <nav class=\"navbar navbar-inverse\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Tavant app</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li ><a href=\"\" [routerLink]=\"['/welcome']\">Home</a></li>\n          <li><a href=\"\" [routerLink]=\"['/products']\" >Product List</a></li>\n           <li><a href=\"\" [routerLink]=\"['/sales']\" >Sales</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n       </div>\n       <div class=\"container\">\n  \n  <div class=\"row\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <p>@Copyright of <a href=\"\" rel=\"nofollow\">P0267__</a><a href=\"mahesh.p@tavant.com\">mahesh.p@tavant.com</a></p>\n  </div>\n</footer>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map