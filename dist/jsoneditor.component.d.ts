import { ElementRef } from '@angular/core';
import { JsonEditorMode } from './jsoneditor.options';
import 'jsoneditor/dist/jsoneditor.min.css';
export declare class JsonEditorComponent {
    private rootElement;
    private editor;
    private optionsDiffer;
    private dataDiffer;
    private options;
    private data;
    constructor(rootElement: ElementRef);
    ngOnInit(): void;
    collapseAll(): void;
    destroy(): void;
    expandAll(): void;
    focus(): void;
    set(json: JSON): void;
    setMode(mode: JsonEditorMode): void;
    setName(name: string): void;
    setSchema(schema: any): void;
    get(): JSON;
    getMode(): JsonEditorMode;
    getName(): string;
    getText(): string;
}
