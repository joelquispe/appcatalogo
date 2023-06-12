import { Component, importProvidersFrom, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartActions, CartSelectors } from 'src/app/store';
import { cartReducer } from 'src/app/store/cart/cart.reducer';
import { ToastrModule } from 'ngx-toastr';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from 'src/app/store/cart/cart.effects';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  providers: [
    
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  private store = inject(Store);
  cart$: Observable<any>;

  constructor() {
    this.cart$ = this.store.select(CartSelectors.cart);
  }
  removeItem(id: string) {
    this.store.dispatch(CartActions.removeItemToCart({ id: '1' }));
  }

  onQuantityMinus() {
    this.store.dispatch(CartActions.updateQuantity({ id: '1', quantity: +1 }));
  }
  onQuantityPlus() {
    this.store.dispatch(CartActions.updateQuantity({ id: '1', quantity: -1 }));
  }

  pushItem() {
    this.store.dispatch(
      CartActions.addItemToCart({
        item: { id: '1', name: 'leche', price: 100, quantity: 1 },
      })
    );
  }
}
