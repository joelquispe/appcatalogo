import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  prices = [20, 50, 100, 200];
  brand = ['Nike', 'Adidas', 'Puma'];
  categories = ['Comida', 'Deportes', 'Hogar', 'Tecnologia'];

  constructor() {}
  onChangeBrand(event: any) {
    const selectBrand = event.target.value;
    this.changeParamsRoute({ brand: selectBrand });
  }
  onChangePrice(event: any) {
    const selectPrice = event.target.value;
    this.changeParamsRoute({ price: selectPrice });
  }
  onChangeCategory(event: any) {
    const selectCategory = event.target.value;
    this.changeParamsRoute({ cat: selectCategory });
  }

  changeParamsRoute(valueQueryParams: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: valueQueryParams,
      queryParamsHandling: 'merge',
    });
  }
}
