import { Component, OnInit } from '@angular/core';
import { FactsService } from '../shared/facts.service';

@Component({
  selector: 'app-list',
  templateUrl: './source-list.component.html'
})
export class SourceListComponent implements OnInit {
  mainFacts: string[];

  constructor(private factsService: FactsService) {}

  getFacts(): void {
    this.mainFacts = this.factsService.getMainFacts();
  }

  ngOnInit(): void {
    this.getFacts();
  }
}
