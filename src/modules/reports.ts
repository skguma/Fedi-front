const SELECT = 'report/SELECT' as const; // 사진 선택하는 액션
const UNSELECT = 'report/UNSELECT' as const; // 사진 선택 해제하는 액션
const SUSPEND = 'report/SUSPEND' as const; // 정지 계정 신고하는 액션

export const select = (tweetId: number) => ({
  type: SELECT,
  tweetId,
});
export const unselect = (tweetId: number) => ({
  type: UNSELECT,
  tweetId,
});

export const suspend = (tweetId: number) => ({
  type: SUSPEND,
  tweetId,
});

type reportState = {
  tweetId: number[];
};
const initialState: reportState = {
  tweetId: [], // 사용자가 선택한 사진들의 tweetID (네트워크맵 전송용),
};

type ReportAction =
  | ReturnType<typeof select>
  | ReturnType<typeof unselect>
  | ReturnType<typeof suspend>;

export default function reports(
  state: reportState = initialState,
  action: ReportAction
) {
  switch (action.type) {
    case SELECT:
      return { tweetId: [...state.tweetId, action.tweetId] };

    case UNSELECT:
      return {
        tweetId: state.tweetId.filter((state) => state !== action.tweetId),
      };
    default:
      return state;
  }
}
