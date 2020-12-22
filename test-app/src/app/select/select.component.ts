import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  categories: string[];

  constructor(private categoriesService: CategoriesService) {}

  getCategories(): void {
    this.categories = this.categoriesService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
