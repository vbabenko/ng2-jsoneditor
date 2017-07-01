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
var core_1 = require('@angular/core');
var jsoneditor_options_1 = require('./jsoneditor.options');
var editor = require('jsoneditor');
require('jsoneditor/dist/jsoneditor.min.css');
var JsonEditorComponent = (function () {
    function JsonEditorComponent(rootElement) {
        this.rootElement = rootElement;
        this.options = new jsoneditor_options_1.JsonEditorOptions();
        this.data = {};
    }
    JsonEditorComponent.prototype.ngOnInit = function () {
        this.editor = new editor(this.rootElement.nativeElement, this.options, this.data);
    };
    JsonEditorComponent.prototype.collapseAll = function () {
        this.editor.collapseAll();
    };
    JsonEditorComponent.prototype.destroy = function () {
        this.editor.destroy();
    };
    JsonEditorComponent.prototype.expandAll = function () {
        this.editor.expandAll();
    };
    JsonEditorComponent.prototype.focus = function () {
        this.editor.focus();
    };
    JsonEditorComponent.prototype.set = function (json) {
        this.editor.set(json);
    };
    JsonEditorComponent.prototype.setMode = function (mode) {
        this.editor.setMode(mode);
    };
    JsonEditorComponent.prototype.setName = function (name) {
        this.editor.setName(name);
    };
    JsonEditorComponent.prototype.setSchema = function (schema) {
        this.editor.setSchema(schema);
    };
    JsonEditorComponent.prototype.get = function () {
        return this.editor.get();
    };
    JsonEditorComponent.prototype.getMode = function () {
        return this.editor.getMode();
    };
    JsonEditorComponent.prototype.getName = function () {
        return this.editor.getName();
    };
    JsonEditorComponent.prototype.getText = function () {
        return this.editor.getText();
    };
    __decorate([
        core_1.Input('options'), 
        __metadata('design:type', jsoneditor_options_1.JsonEditorOptions)
    ], JsonEditorComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input('data'), 
        __metadata('design:type', Object)
    ], JsonEditorComponent.prototype, "data", void 0);
    JsonEditorComponent = __decorate([
        core_1.Component({
            selector: 'json-editor',
            template: "<div></div>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], JsonEditorComponent);
    return JsonEditorComponent;
}());
exports.JsonEditorComponent = JsonEditorComponent;
//# sourceMappingURL=jsoneditor.component.js.map