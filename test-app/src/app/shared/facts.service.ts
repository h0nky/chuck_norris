import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { AppActions } from '../app.actions';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

const httpOptions = (value: string) => ({
  headers: new HttpHeaders({
    accept: 'application/json',
    'x-rapidapi-key': '5bc99038a2msha205d19d7c2b37dp13b20djsn9d3e4a6c9c32',
    'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
  }),
  params: new HttpParams().set('query', `${value}`)
});

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  configUrl = `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search`;

  constructor(
    private http: ApiHttpService,
    private action: AppActions
  ) {}

  getMainFacts(value: string): void {
    this.http.getData(this.configUrl, httpOptions(value))
      .subscribe((data: string[]) => {
        this.action.setFacts(data);
      });
  }
}
