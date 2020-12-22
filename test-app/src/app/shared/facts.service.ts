import { Injectable } from '@angular/core';
import { mainFacts } from '../mocks/mock-facts';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
  getMainFacts(): string[] { return mainFacts; }
}
