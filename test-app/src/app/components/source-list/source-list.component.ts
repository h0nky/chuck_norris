import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store/interfaces';
import { Actions } from '../../actions/actions';
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
  spinner: boolean;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: Actions
  ) {
    ngRedux
      .select('loading')
      .subscribe((loadingState: boolean) => this.spinner = loadingState);
    ngRedux
      .select<string[]>('facts')
      .subscribe(facts => this.mainFacts = facts);
  }

  onMove(): void {
    if (this.selectedFacts && this.selectedFacts.length) {
      this.actions.moveToCustomList(this.selectedFacts);
      this.selectedFacts = [];
    }
  }
}
