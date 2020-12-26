import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/interfaces';
import { AppActions } from '../app.actions';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
  providers: [ButtonComponent]
})
export class CustomListComponent {
  customFacts: string[];
  selectedFacts: string[];
  buttonLabel = 'Remove';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: AppActions
  ) {
    ngRedux
      .select<string[]>('customList')
      .subscribe(facts => this.customFacts = facts);
  }

  onRemove(): void {
    this.actions.removeFromCustomList(this.selectedFacts);
  }

}
