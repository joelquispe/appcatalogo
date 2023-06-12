import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../products/product.component';
import { CategoryComponent } from '../category/category.component';
import { FiltersComponent } from '../products/components/filters/filters.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule,ProductComponent,FiltersComponent,CartComponent],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

}
