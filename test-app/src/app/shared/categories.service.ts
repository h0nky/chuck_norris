import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { AppActions } from '../app.actions';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: ApiHttpService,
    private action: AppActions
  ) {}

  getCategories(): void {
    this.http.getData()
      .subscribe((data: string[]) => {
        this.action.fetchingCategories(data);
      });
  }
}
