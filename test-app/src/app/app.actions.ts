import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class AppActions {
  static readonly FETCHING_CATEGORIES = 'FETCHING_CATEGORIES';
  static readonly CATEGORIES_FETCHED = 'CATEGORIES_FETCHED';

  @dispatch()
  fetchingCategories = (categories: string[]): { payload: string[]; type: string } => ({
    type: AppActions.CATEGORIES_FETCHED,
    payload: categories
  })
}
