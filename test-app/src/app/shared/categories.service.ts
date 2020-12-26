import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { AppActions } from '../app.actions';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    accept: 'application/json',
    'x-rapidapi-key': '5bc99038a2msha205d19d7c2b37dp13b20djsn9d3e4a6c9c32',
    'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  configUrl = `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories`;

  constructor(
    private http: ApiHttpService,
    private action: AppActions
  ) {}

  getCategories(): void {
    this.http.getData(this.configUrl, httpOptions)
      .subscribe((data: string[]) => {
        this.action.fetchCategories(data);
      });
  }
}
