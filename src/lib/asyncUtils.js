// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // 이 함수는 promiseCreator가 하나의 파라미터만 return한다는 전제하에 작성됨
  // 여러 종류의 파라미터를 전달해야 하는 상황이라면 객체 타입의 파라미터를 받아옴
  // ex. writeComment({postId: 1, text: '댓글 내용'});
  return (param) => async (dispatch) => {
    // 요청 시작
    console.log(1);
    dispatch({ type, param });
    console.log(2);
    try {
      // payload: 결과물 이름
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload }); // 성공, ❌ 결과를 여기서 저장하는데 이게 잘 안되는거 같음
      console.log('success');
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true }); // 실패
      console.log('error');
    }
  };
};

export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null,
  }),

  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  // 성공 상태
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  // 실패 상태
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

// 비동기 관련 액션들을 처리하는 리듀서
// type: 액션의 타입, key: 상태의 key(ex. posts, post)
export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(),
        };

      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
