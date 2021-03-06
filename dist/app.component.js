"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('App initialized!');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        styles: ["\n    .wrapper {\n      width: 480px;\n      margin: 0 auto;\n      text-align: center;\n    }\n    \n    h1 {\n      margin-bottom: 15px;\n      padding-bottom: 15px;\n      border-bottom: 1px dashed #333;\n    }\n    \n    h3 {\n      margin-bottom: 15px;\n    }\n  "],
        template: "\n    <div class=\"wrapper\">\n      <h1>ng-spin-kit</h1>\n    \n      <h3>rotating-plane</h3>\n      <sk-rotating-plane></sk-rotating-plane>\n    \n      <h3>double-bounce</h3>\n      <sk-double-bounce [color]=\"'green'\"></sk-double-bounce>\n    \n      <h3>wave</h3>\n      <sk-wave [color]=\"'#00688B'\"></sk-wave>\n    \n      <h3>wandering-cubes</h3>\n      <sk-wandering-cubes></sk-wandering-cubes>\n    \n      <h3>pulse</h3>\n      <sk-pulse [color]=\"'red'\"></sk-pulse>\n    \n      <h3>chasing-dots</h3>\n      <sk-chasing-dots></sk-chasing-dots>\n    \n      <h3>circle</h3>\n      <sk-circle></sk-circle>\n    \n      <h3>three-bounce</h3>\n      <sk-three-bounce></sk-three-bounce>\n    \n      <h3>cube-grid</h3>\n      <sk-cube-grid></sk-cube-grid>\n    \n      <h3>word-press</h3>\n      <sk-word-press></sk-word-press>\n    \n      <h3>fading-circle</h3>\n      <sk-fading-circle></sk-fading-circle>\n    \n      <h3>folding-cube</h3>\n      <sk-folding-cube></sk-folding-cube>\n    </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map