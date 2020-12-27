import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import {
  CATEGORIES_FETCHED,
  FACTS_FETCHED,
  MOVE_TO_CUSTOM_LIST,
  REMOVE_FROM_CUSTOM_LIST
} from './constants';
import { IAction } from './interfaces';

@Injectable()
export class Actions {
  @dispatch()
  fetchData = (): IAction => ({
    type: 'FETCH_DATA',
    payload: null
  })

  @dispatch()
  fetchCategories = (categories: string[]): IAction => ({
    type: CATEGORIES_FETCHED,
    payload: categories
  })

  @dispatch()
  setFacts = (facts: string[]): IAction => ({
    type: FACTS_FETCHED,
    payload: facts
  })

  @dispatch()
  moveToCustomList = (facts: string[]): IAction => ({
    type: MOVE_TO_CUSTOM_LIST,
    payload: facts
  })

  @dispatch()
  removeFromCustomList = (facts: string[]): IAction => ({
    type: REMOVE_FROM_CUSTOM_LIST,
    payload: facts
  })
}
