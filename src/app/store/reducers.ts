import { IAppState } from './interfaces';
import {
  FETCHING_CATEGORIES,
  CATEGORIES_FETCHED,
  FETCHING_FACTS,
  FACTS_FETCHED,
  MOVE_TO_CUSTOM_LIST,
  REMOVE_FROM_CUSTOM_LIST
} from '../actions/constants';

export const initialState: IAppState = {
  loading: false,
  categories: [],
  facts: [],
  customList: []
};

export function rootReducer(state= initialState, action): IAppState {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_DATA':
      return { ...state, loading: true };
    case CATEGORIES_FETCHED:
      const categories = payload;
      return { ...state, categories, loading: false };
    case FETCHING_FACTS:
      return { ...state, loading: true };
    case FACTS_FETCHED:
      const facts = payload.result.map(item => item.value);
      return { ...state, facts, loading: false };
    case MOVE_TO_CUSTOM_LIST:
      return { ...state, customList: payload };
    case REMOVE_FROM_CUSTOM_LIST:
      const newCustomList = state.customList.filter(item => !payload.includes(item));
      return { ...state, customList: newCustomList };
    default:
      return state;
  }
}
