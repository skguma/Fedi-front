/* result 페이지에 들어가는 결과를 스토어에 저장하는 reducer */
import { dispatch } from 'd3';
import * as resultsAPI from '../api/results';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils';

/* 액션 타입 */
const GET_RESULTS = 'GET_RESULTS'; // 요청 시작
const GET_RESULTS_SUCCESS = 'GET_RESULTS_SUCCESS'; // 요청 성공
const GET_RESULTS_ERROR = 'GET_RESULTS_ERROR'; // 요청 실패

export const getResults = (file) => async (dispatch) => {
  dispatch({ type: GET_RESULTS }); // 요청 시작하라고 액션을 디스패치함
  try {
    const results = await resultsAPI.getResults(); // API 호출
    dispatch({ type: GET_RESULTS_SUCCESS, results }); // 성공, 결과 저장하는 액션 디스패치함
  } catch (e) {
    dispatch({ type: GET_RESULTS_ERROR, error: e }); // 실패 결과 disaptch함
  }
};

const initialState = {
  results: {
    loading: false,
    data: null,
    eror: null,
  },
};

export default function results(state = initialState, action) {
  switch (action.type) {
    case GET_RESULTS: // 로딩 중
      return {
        ...state,
        results: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_RESULTS_SUCCESS:
      return {
        ...state,
        results: {
          loading: true,
          data: action.results,
          error: null,
        },
      };
    case GET_RESULTS_ERROR:
      return {
        ...state,
        results: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
