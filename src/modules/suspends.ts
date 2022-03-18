const SUSPEND = 'report/SUSPEND'; // 정지 계정 신고하는 액션

// 액션 생성함수
export const suspends = (tweetId) => ({
  type: SUSPEND,
  tweetId,
});

const initialState = {
  suspendTweetId: null, // 사용자가 선택한 사진들의 tweetID (네트워크맵 전송용),
};

// reducer 선언
export default function suspender(state = initialState, action) {
  switch (action.type) {
    case SUSPEND:
      return { suspendTweetId: action.tweetId };

    default:
      return state;
  }
}
