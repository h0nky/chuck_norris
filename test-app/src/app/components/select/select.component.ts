import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { NgRedux } from '@angular-redux/store';
import { ButtonComponent } from '../button/button.component';
import { FactsService } from '../../services/facts.service';
import { IAppState } from '../../store/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [ButtonComponent]
})
export class SelectComponent implements OnInit {
  selectedValue: string;
  categories: string[];
  warningMessage: string;
  buttonLabel = 'Get Facts';

  constructor(
    private factsService: FactsService,
    private categoriesService: CategoriesService,
    private ngRedux: NgRedux<IAppState>
  ) {
    ngRedux
      .select<string[]>('categories')
      .subscribe(newCategories => this.categories = newCategories);
  }

  ngOnInit(): void {
    this.categoriesService.getCategories();
  }

  onPress(): void {
    if (!this.selectedValue) {
      this.warningMessage = 'Please, choose category before make a request';
    } else {
      this.warningMessage = '';
      this.factsService.getMainFacts(this.selectedValue);
    }
  }
}
