import { ProductService } from "src/app/services/product.service";
import { from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, mergeMap} from 'rxjs/operators';
import { Store } from "@ngrx/store";
import { selectAllProducts } from "./product.selectors";
import { AppState } from "../app.state";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addProduct, loadProducts, loadProductsFailure, loadProductsSuccess, removeProduct, updateProduct } from "./product.actions";

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private productService: ProductService
    ) {}

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadProducts),
            switchMap(() => {
                return this.productService.getProducts().pipe(
                    map((products) => loadProductsSuccess({products})),
                    catchError(async (error) => loadProductsFailure({ error })) 
                )},
                ))}, 
            );

    // saveProducts$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(addProduct, removeProduct, updateProduct),
    //         withLatestFrom(this.store.select(selectAllProducts)),
    //         switchMap(([action, products]) => from(this.productService.saveProducts(products)))
    //     ),
    //     {dispatch: false}
    // );
}