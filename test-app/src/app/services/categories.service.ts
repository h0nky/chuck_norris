import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { Actions } from '../actions/actions';
import { ApiConfig } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: ApiHttpService,
    private action: Actions,
    private apiConfig: ApiConfig
  ) {}

  getCategories(): void {
    this.http.getData(
      this.apiConfig.getConfigUrl('categories'),
      this.apiConfig.getHttpOptions()
    ).subscribe((data: string[]) => {
        this.action.fetchCategories(data);
      });
  }
}
