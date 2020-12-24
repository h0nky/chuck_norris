import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selectedValue: string;
  categories;

  constructor(
    private categoriesService: CategoriesService,
    private ngRedux: NgRedux<any>
  ) {
    this.categories = ngRedux
      .select<string[]>('categories')
      .subscribe(newCategories => this.categories = newCategories);
  }

  getCategories(): void {
    // @ts-ignore
    this.categoriesService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
