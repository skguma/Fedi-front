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
  GET_RESULTS, // 액션 타입, 액션 객체를 리턴하는게 아니라, 함수를 생성하는 액션 생성함수 작성함
  resultsAPI.getResults // payload, 보통 여기서 api 요청함
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
