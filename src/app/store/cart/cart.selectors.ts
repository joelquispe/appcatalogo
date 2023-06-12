import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";

import { CartState, cartStateKey } from "./cart.reducer";

export const selectFeature = createFeatureSelector<CartState>(cartStateKey);;


export const cart = createSelector(selectFeature,(state:CartState)=>state);

export const items = createSelector(selectFeature,(state)=>state.items)
