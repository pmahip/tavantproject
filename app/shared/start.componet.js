"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StarComponent = (function () {
    function StarComponent() {
        this.rating = 4;
    }
    StarComponent.prototype.ngOnChange = function () {
        this.starWidth = 86 / 2 * this.rating;
    };
    return StarComponent;
}());
StarComponent = __decorate([
    core_1.Component({
        selector: 'ai-star',
        templateUrl: 'app/shared/star.component.html',
        styleUrls: ['app/shared/star.component.css']
    })
], StarComponent);
exports.StarComponent = StarComponent;
//# sourceMappingURL=start.componet.js.map