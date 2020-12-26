import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './source-list.component.html'
})
export class SourceListComponent {
  mainFacts: string[];

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    ngRedux
      .select<string[]>('facts')
      .subscribe(facts => this.mainFacts = facts);
  }
}
