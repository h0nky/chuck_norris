import { Injectable } from '@angular/core';
import { ApiHttpService } from './api-http.service';
import { Actions } from '../actions/actions';
import { ApiConfig } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor(
    private http: ApiHttpService,
    private action: Actions,
    private apiConfig: ApiConfig
  ) {}

  getMainFacts(value: string): void {
    this.http.getData(
      this.apiConfig.getConfigUrl('search'),
      this.apiConfig.getHttpOptions(value)
    ).subscribe((data: string[]) => {
        this.action.setFacts(data);
      });
  }
}
