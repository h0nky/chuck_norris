import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

export interface IAction {
  payload: string[];
  type: string;
};

@Injectable()
export class AppActions {
  static readonly FETCHING_CATEGORIES = 'FETCHING_CATEGORIES';
  static readonly CATEGORIES_FETCHED = 'CATEGORIES_FETCHED';

  static readonly FACTS_FETCHED = 'FACTS_FETCHED';

  @dispatch()
  fetchCategories = (categories: string[]): IAction => ({
    type: AppActions.CATEGORIES_FETCHED,
    payload: categories
  })

  @dispatch()
  setFacts = (facts: string[]): IAction => ({
    type: AppActions.FACTS_FETCHED,
    payload: facts
  })
}
