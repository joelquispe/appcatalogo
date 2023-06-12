import { createReducer, on } from '@ngrx/store';
import { CartActions } from '..';
import { IItem } from '../../../common/interfaces/item.interface';
import { ICart } from 'src/common/interfaces/cart.interface';
import { ToastrService } from 'ngx-toastr';
export const cartStateKey = 'cartState';
export interface CartState {
  items: IItem[];
  total: number;
  amount: number;
}

export const initialState: CartState = {
  items: [],
  total: 0,
  amount: 0,
};
const savedCartItems = localStorage.getItem('cart');
if (savedCartItems) {
  initialState.items = JSON.parse(savedCartItems).items;
}
export const cartReducer = createReducer(
  initialState,
  on(CartActions.loadCart, (state, action) => ({
    ...state,
    amount: action.cart.amount,
    items: action.cart.items,
    total: action.cart.total,
  })),
  on(CartActions.addItemToCart, (state, action) => {
    const existingItem = state.items.find((item) => item.id === action.item.id);
    if (existingItem) {
      
     
      return state;
    }
    const newState = {
      ...state,
      items: [...state.items, { ...action.item, quantity: 1 }],
    };
    updateLocalStorage(newState);
    return newState;
  }),
  on(CartActions.removeItemToCart, (state, action) => {
    const updateItems = state.items.filter((item) => item.id != action.id);
    const newState = { ...state, items: updateItems };
    updateLocalStorage(newState);
    return newState;
  }),
  on(CartActions.updateQuantity, (state, action) => {
    const updateItems = state.items.map((item) =>
      item.id == action.id ? { ...item, quantity: action.quantity } : item
    );
    const newState = { ...state, items: updateItems };
    updateLocalStorage(newState);
    return newState;
  })
);

function updateLocalStorage(cart: ICart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
