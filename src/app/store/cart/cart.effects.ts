import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { CartActions, CartSelectors } from '..';
import { mergeMap, pipe, tap, withLatestFrom } from 'rxjs';
import { loadCart } from './cart.actions';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { items, cart } from './cart.selectors';
import { AppStateInterface } from '../appstate.interface';
import { IItem } from 'src/common/interfaces/item.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class CartEffects {
  private localstorageService = inject(LocalstorageService);
  private toastService = inject(ToastrService);
  constructor(private actions$: Actions, private store: Store) {}
  addToCart$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.addItemToCart),
        withLatestFrom(this.store.select(CartSelectors.items)),
        tap(([action, cartItems]) => {
          console.log("hjoel")
          console.log(cartItems)
          console.log(action.item.id);
          const existingItem = cartItems.some(
            (item:IItem) => item.id == action.item.id
          );
          console.log(existingItem);
          if (existingItem) {
            console.log("si existe")
            this.toastService.warning(
              'El producto ya existe en el carrito',
              'Aviso'
            );
          }
        })
      ),
    { dispatch: false }
  );
}
