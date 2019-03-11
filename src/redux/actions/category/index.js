import { FETCH_CATEGORIES, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS } from '../../../constants';

export const fetchCategories = payload => ({
  type: FETCH_CATEGORIES,
  payload,
});

export const fetchCategoriesSuccess = payload => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailure = payload => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload,
});
