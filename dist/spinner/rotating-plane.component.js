"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var spinner_component_1 = require("./spinner.component");
var RotatingPlaneComponent = (function (_super) {
    __extends(RotatingPlaneComponent, _super);
    function RotatingPlaneComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RotatingPlaneComponent;
}(spinner_component_1.SpinnerComponent));
RotatingPlaneComponent = __decorate([
    core_1.Component({
        selector: 'sk-rotating-plane',
        styles: ["\n    .rotating-plane-spinner {\n      margin: 25px auto;\n      width: 40px;\n      height: 40px;\n    \n      -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n      animation: sk-rotateplane 1.2s infinite ease-in-out;\n    }\n    \n    @-webkit-keyframes sk-rotateplane {\n      0% {\n        -webkit-transform: perspective(120px)\n      }\n      50% {\n        -webkit-transform: perspective(120px) rotateY(180deg)\n      }\n      100% {\n        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)\n      }\n    }\n    \n    @keyframes sk-rotateplane {\n      0% {\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n      }\n      50% {\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n      }\n      100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n      }\n    }\n  "],
        template: "\n    <div [hidden]=\"!visible\" class=\"rotating-plane-spinner\" [style.backgroundColor]=\"color\"></div>\n  "
    })
], RotatingPlaneComponent);
exports.RotatingPlaneComponent = RotatingPlaneComponent;
//# sourceMappingURL=rotating-plane.component.js.map