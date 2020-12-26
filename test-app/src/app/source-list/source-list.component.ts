import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/interfaces';
import { AppActions } from '../app.actions';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.scss'],
  providers: [ButtonComponent]
})
export class SourceListComponent {
  mainFacts: string[];
  selectedFacts: string[];
  buttonLabel = 'Move';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: AppActions
  ) {
    ngRedux
      .select<string[]>('facts')
      .subscribe(facts => this.mainFacts = facts);
  }

  onMove(): void {
    this.actions.moveToCustomList(this.selectedFacts);
  }
}
