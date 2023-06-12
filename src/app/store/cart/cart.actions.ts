import { createAction, props } from "@ngrx/store";
import { ICart } from "src/common/interfaces/cart.interface";
import { IItem } from "src/common/interfaces/item.interface";


export const loadCart = createAction('[CART] load cart',props<{cart:ICart}>());
 export const addItemToCart = createAction('[CART] add item',props<{item:IItem}>());;
 export const removeItemToCart= createAction('[CART] remove item',props<{id:string}>());
 export const updateQuantity = createAction('[CART] update quantity',props<{id:string,quantity:number}>())
 
 