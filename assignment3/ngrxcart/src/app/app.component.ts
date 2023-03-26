import { Component } from '@angular/core';
import { selectProductsCount } from './store/product/product.selectors';
import { Product } from './model/product.model';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { loadProducts } from './store/product/product.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public productsCount$: Observable<number> = this.store.select(selectProductsCount);

  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
