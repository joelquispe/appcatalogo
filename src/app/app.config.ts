import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideStore, StoreModule } from '@ngrx/store';
import { cartReducer, cartStateKey } from './store/cart/cart.reducer';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './store/cart/cart.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideStore(),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    importProvidersFrom(
      StoreModule.forRoot({cart:cartReducer}),
      BrowserAnimationsModule,
      StoreModule.forFeature(cartStateKey,cartReducer),
      ToastrModule.forRoot(),
      EffectsModule.forRoot([CartEffects])
    )],
};
