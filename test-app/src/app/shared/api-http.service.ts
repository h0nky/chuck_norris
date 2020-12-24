import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
export class ApiHttpService {

  configUrl = `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories`;

  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get(this.configUrl, httpOptions);
  }
}
