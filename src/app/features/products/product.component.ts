import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ProductListComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

}
