"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CollegeListComponent = void 0;
var core_1 = require("@angular/core");
var CollegeListComponent = /** @class */ (function () {
    function CollegeListComponent(backendService) {
        this.backendService = backendService;
        this.collegeDetails = [];
        this.stars = [1, 2, 3, 4, 5];
    }
    CollegeListComponent.prototype.countStar = function (star) {
        this.selectedValue = star;
        console.log('Value of star', star);
    };
    CollegeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backendService.getCollegeDetails().subscribe(function (data) {
            _this.collegeDetails = data;
            console.log(data);
        });
    };
    CollegeListComponent = __decorate([
        core_1.Component({
            selector: 'app-college-list',
            templateUrl: './college-list.component.html',
            styleUrls: ['./college-list.component.scss']
        })
    ], CollegeListComponent);
    return CollegeListComponent;
}());
exports.CollegeListComponent = CollegeListComponent;
