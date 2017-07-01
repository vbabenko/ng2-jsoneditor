export declare type JsonEditorMode = 'tree' | 'view' | 'form' | 'code' | 'text';
export interface JsonEditorTreeNode {
    field: String;
    value: String;
    path: String[];
}
export declare class JsonEditorOptions {
    ace: Object;
    ajv: Object;
    onChange: () => void;
    onEditable: (node: JsonEditorTreeNode | {}) => boolean | {
        field: boolean;
        value: boolean;
    };
    onError: (error: any) => void;
    onModeChange: (newMode: JsonEditorMode, oldMode: JsonEditorMode) => void;
    escapeUnicode: boolean;
    sortObjectKeys: boolean;
    history: boolean;
    mode: JsonEditorMode;
    modes: JsonEditorMode[];
    name: String;
    schema: Object;
    search: boolean;
    indentation: Number;
    theme: Number;
    constructor();
}
