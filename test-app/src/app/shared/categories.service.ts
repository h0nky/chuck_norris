import { Injectable } from '@angular/core';
import { categories } from '../mocks/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  getCategories(): string[] { return categories; }
}
