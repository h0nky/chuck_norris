import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actions } from '../actions/actions';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(
    private http: HttpClient,
    private actions: Actions
  ) { }

  getData(url, options): Observable<object> {
    this.actions.fetchData();
    return this.http.get(url, options);
  }
}
