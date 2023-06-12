import { IItem } from "./item.interface";

export interface ICart{
    items:IItem[];
    amount:number;
    total:number;
}