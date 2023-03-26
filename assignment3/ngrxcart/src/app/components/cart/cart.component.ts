import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { AppState } from 'src/app/store/app.state';
import { selectAllProducts } from 'src/app/store/product/product.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // items = [{id: 100, quantity: 1, price: 100}, {id: 100, quantity: 2, price: 150}, {id: 100, quantity: 1, price: 100}, {id: 100, quantity: 2, price: 150},{id: 100, quantity: 1, price: 100}, {id: 100, quantity: 2, price: 150}];

  public allProducts$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.allProducts$ = this.store.select(selectAllProducts);
  }
}
