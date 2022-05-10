import * as resultsAPI from '../api/results';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils';

const GET_RESULTS = 'GET_RESULTS';
const GET_RESULTS_SUCCESS = 'GET_RESULTS_SUCCESS';
const GET_RESULTS_ERROR = 'GET_RESULTS_ERROR';

export const getResults = createPromiseThunk(
  GET_RESULTS,
  resultsAPI.getResults
);

const initialState = {
  results: reducerUtils.initial(),
};

export default function results(state = initialState, action) {
  switch (action.type) {
    case GET_RESULTS:
    case GET_RESULTS_SUCCESS:
    case GET_RESULTS_ERROR:
      return handleAsyncActions(GET_RESULTS, 'results')(state, action);
    default:
      return state;
  }
}
