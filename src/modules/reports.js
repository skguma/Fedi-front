// Ducks 패턴 - 액션 이름에 접두사 넣기
const SELECT = "report/SELECT"; // 사진 선택하는 액션
const UNSELECT = "report/UNSELECT"; // 사진 선택 해제하는 액션

// 액션 생성함수
export const select = tweetID => ({
  type: SELECT,
  tweetID
});
export const unselect = tweetID => ({
  type: UNSELECT,
  tweetID
});

const initialState = {
  tweetID: [] // 사용자가 선택한 사진들의 tweetID (네트워크맵 전송용)
};

// reducer 선언
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SELECT:
      const newTweetID = Object.assign({}, state.tweetID, action.tweetID);
      return newTweetID;

    case UNSELECT:
      const tweetID = state.filter(state => state.tweetID !== action.tweetID);
      return tweetID;
    default:
      return state;
  }
}
