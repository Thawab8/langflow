import { Node,Edge,Viewport } from "reactflow"
//kind and class are just representative names to represent the actual structure of the object received by the API

export type APIObjectType = {kind:APIKindType,[key:string]:APIKindType}
export type APIKindType= {class:APIClassType,[key:string]:APIClassType}
export type APITemplateType = {variable:TemplateVariableType,[key:string]:TemplateVariableType}
export type APIClassType ={base_classes:Array<string>,description:string,template:APITemplateType,[key:string]:Array<string>|string|APITemplateType}
export type TemplateVariableType = {type:string,required:boolean,placeholder?:string,list:boolean,show:boolean,multiline?:boolean,value?:any,[key:string]:any}
export type sendAllProps={
    nodes: Node[];
    edges: Edge[];
    viewport: Viewport;
    message:string;
    chatHistory:{message:string,isSend:boolean}[],
};