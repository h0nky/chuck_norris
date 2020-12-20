import { combineReducers } from 'redux';
import { IAppState } from './interfaces';
import { FETCHING_CATEGORIES, CATEGORIES_FETCHED, FETCHING_FACTS, FACTS_FETCHED } from './constants';

const initialState: IAppState = {
  loading: false,
  categories: [],
  facts: []
};

export function categoriesReducer(state = initialState, action): any {
  const { type, payload } = action;
  let loading;
  switch (type) {
    case 'FETCHING_CATEGORIES':
      loading = true;
      return { ...state, loading };
    case 'CATEGORIES_FETCHED':
      const categories: string[] = payload;
      loading = false;
      return { ...state, categories, loading };
    default:
      return state;
  }
}

export function factsReducer(state = initialState, action): any {
  const { type, payload } = action;
  let loading;
  switch (type) {
    case 'FETCHING_FACTS':
      loading = true;
      return { ...state, loading };
    case 'FACTS_FETCHED':
      loading = false;
      const facts: string[] = payload;
      return { ...state, payload, loading };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ categoriesReducer, factsReducer });
