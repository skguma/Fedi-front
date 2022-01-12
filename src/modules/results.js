// - result 페이지에 들어가는 결과를 스토어에 저장하는 리듀서
import * as resultsAPI from "../api/results";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions
} from "../lib/asyncUtils";

/* 액션 타입 */
const GET_RESULTS = "GET_RESULTS"; // 요청 시작
const GET_RESULTS_SUCCESS = "GET_RESULTS_SUCCESS"; // 요청 성공
const GET_RESULTS_ERROR = "GET_RESULTS_ERROR"; // 요청 실패

export const getResults = file =>
  createPromiseThunk(
    GET_RESULTS,
    resultsAPI.getResults(file) // promiseCreator
  );

const initialState = {
  results: reducerUtils.initial()
};

export default function results(state = initialState, action) {
  switch (action.type) {
    case GET_RESULTS:
    case GET_RESULTS_SUCCESS:
    case GET_RESULTS_ERROR:
      return handleAsyncActions(GET_RESULTS, "results")(state, action);
    default:
      return state;
  }
}
