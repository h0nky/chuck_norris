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
  static readonly MOVE_TO_CUSTOM_LIST = 'MOVE_TO_CUSTOM_LIST';
  static readonly REMOVE_FROM_CUSTOM_LIST = 'REMOVE_FROM_CUSTOM_LIST';

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

  @dispatch()
  moveToCustomList = (facts: string[]): IAction => ({
    type: AppActions.MOVE_TO_CUSTOM_LIST,
    payload: facts
  })

  @dispatch()
  removeFromCustomList = (facts: string[]): IAction => ({
    type: AppActions.REMOVE_FROM_CUSTOM_LIST,
    payload: facts
  })
}
