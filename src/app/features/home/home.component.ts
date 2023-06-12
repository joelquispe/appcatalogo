import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../products/product.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CatalogoComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
