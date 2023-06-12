import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,CategoryListComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

}
