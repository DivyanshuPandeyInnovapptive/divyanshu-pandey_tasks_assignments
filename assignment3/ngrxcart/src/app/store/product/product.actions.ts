import { createAction, props } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "src/app/model/product.model";

export const addProduct = createAction(
    '[Product Page] Add Product', 
    props<{content: Product}>()
);

export const removeProduct = createAction(
    '[Product Page] Remove Product', 
    props<{id: number}>()
);

export const updateProduct = createAction(
    '[Product Page] Update Product',
    props<{id: number}>()
)

export const loadProducts = createAction('[Cart Page] Load Products');

export const loadProductsSuccess = createAction(
    '[Cart Page] Load Products', 
    props<{products: Product[]}>()
);

export const loadProductsFailure = createAction(
    '[Cart Page] Load Products Failure',
    props<{error: string}>()
);