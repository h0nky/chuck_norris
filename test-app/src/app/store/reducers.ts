import { IAppState } from './interfaces';
import { FETCHING_CATEGORIES, CATEGORIES_FETCHED, FETCHING_FACTS, FACTS_FETCHED } from './actions';

export const initialState: IAppState = {
  loading: false,
  categories: [],
  facts: []
};

export function rootReducer(state= initialState, action): any {
  const { type, payload } = action;
  switch (type) {
    case 'FETCHING_CATEGORIES':
      return { ...state, loading: true };
    case 'CATEGORIES_FETCHED':
      const categories = payload;
      return { ...state, categories, loading: false };
    case 'FETCHING_FACTS':
      return { ...state, loading: true };
    case 'FACTS_FETCHED':
      const facts = payload;
      return { ...state, facts, loading: false };
    default:
      return state;
  }
}
