import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { AppState } from 'src/app/store/app.state';
import { updateProduct } from 'src/app/store/product/product.actions';
import { selectAllProducts } from 'src/app/store/product/product.selectors';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public allProducts$: Observable<Product[]> = this.store.select(selectAllProducts);

  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit() {
  }

  update() {
    this.store.dispatch(updateProduct({id: 1}));
  }

  updateProduct(product: Product) {
    this.store.dispatch(updateProduct({id: Number(product.id)}));
  }
}
