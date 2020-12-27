import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfig {

  getConfigUrl(route: string): string {
    return `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/${route}`;
  }

  getHttpOptions(value?: string): object {
    return {
      headers: new HttpHeaders({
        accept: 'application/json',
        'x-rapidapi-key': '5bc99038a2msha205d19d7c2b37dp13b20djsn9d3e4a6c9c32',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      }),
      params: value && new HttpParams().set('query', `${value}`)
    };
  }
}
