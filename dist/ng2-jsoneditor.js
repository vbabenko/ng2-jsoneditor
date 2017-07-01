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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var jsoneditor_component_1 = require('./jsoneditor.component');
__export(require('./jsoneditor.component'));
__export(require('./jsoneditor.options'));
var JSONEditorModule = (function () {
    function JSONEditorModule() {
    }
    JSONEditorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [
                jsoneditor_component_1.JsonEditorComponent
            ],
            exports: [jsoneditor_component_1.JsonEditorComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], JSONEditorModule);
    return JSONEditorModule;
}());
exports.JSONEditorModule = JSONEditorModule;
//# sourceMappingURL=ng2-jsoneditor.js.map