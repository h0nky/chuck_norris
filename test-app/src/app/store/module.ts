import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer } from './reducers';
import { IAppState } from './interfaces';

// Middleware
import { createLogger } from 'redux-logger';

@NgModule({
  imports: [NgReduxModule]
})
export class StoreModule {
  constructor(store: NgRedux<any>) {
    store.configureStore(rootReducer, {}, [createLogger()]);
  }
}
