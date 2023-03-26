import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/model/product.model";
import { addProduct, loadProducts, loadProductsFailure, loadProductsSuccess, removeProduct, updateProduct } from "./product.actions";

export interface ProductState {
    products: Product[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
    count: number;
}

export const initialState: ProductState = {
    products: [],
    error: '',
    status: 'pending',
    count: 0,
}

export const productReducer = createReducer(
    initialState, 

    on(addProduct, (state, {content}) => ({
        ...state, 
        products: [...state.products, content]
    })),

    on(removeProduct, (state, {id}) => ({
        ...state,
        products: state.products.filter(product => product.id !== id),
    })),

    on(updateProduct, (state, {id}) => ({
        ...state,
        products: state.products.map(product => {
            if(product.id === id) {
                let p : Product = {id: product.id, name: product.name, price: product.price, quantity: product.quantity + 1, image: product.image};
                return p;
            }else return product;
        }),
        errors: '',
        status: 'success',
    })),

    on(loadProducts, (state) => ({
        ...state,
        status: 'loading',
    })),

    on(loadProductsSuccess, (state, {products}) => ({
        ...state,
        products: products,
        error: '',
        status: 'success',
        // count: state.products.reduce((acc, product) => (acc + product.quantity), 0),
    })),

    on(loadProductsFailure, (state, {error}) => ({
        ...state,
        error: error,
        status: 'error',
    })),

)

// import { Product } from 'src/app/model/product.model';
// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// import { createReducer, on } from '@ngrx/store';
// import { addProduct, loadProducts, loadProductsFailure, loadProductsSuccess, removeProduct, updateProduct } from './product.actions';

// export interface ProductState extends EntityState<Product> {
//     products: Product[];
//     error: string;
//     status: 'pending' | 'loading' | 'error' | 'success';
//     count: number;
// }

// export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

// export const initialState = adapter.getInitialState({
//     products: [],
//     error: '',
//     status: 'pending',
//     count: 0,
// });

// export const productReducer = createReducer(
//     initialState,

//     on(loadProducts, (state) => {
//         return adapter.setAll(
//             [],
//             {...state, status: 'loading'},
//         )
//     }),

//     on(loadProductsSuccess, (state, {products}) => {
//         console.log("jhat", products)
//         return adapter.setAll(
//             products,
//             {...state, error: '', status: 'success', 
//                 count: state.products.reduce((acc, product) => acc + product['quantity'], 0)
//             },
//         )
//     }),

//     on(loadProductsFailure, (state, {error}) => {
//         return adapter.setAll(
//             [],
//             {...state, error: error, status: 'error'},
//         )
//     }),

//     on(addProduct, (state, {content}) => {
//         return adapter.addOne(content, state);
//     }),

//     on(removeProduct, (state, {id}) => {
//         return adapter.removeOne(id, state);
//     }),

//     on(updateProduct, (state, action) => {
//         return adapter.updateOne(action.product, state);
//     })
// );

// export const { selectAll, selectIds } = adapter.getSelectors();
