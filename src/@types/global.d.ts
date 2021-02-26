export interface keyable {
    [key: string]: any
}

export type ItemType=String | Number | keyable;

export interface ISelectOption {
    value:any,
    label:string
};