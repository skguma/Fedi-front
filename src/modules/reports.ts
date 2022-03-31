const SELECT = 'report/SELECT' as const;
const UNSELECT = 'report/UNSELECT' as const;
const SUSPEND = 'report/SUSPEND' as const;

export const select = (tweetId: number, tweetUrl: string) => ({
  type: SELECT,
  tweetId,
  tweetUrl,
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
  tweet: {
    tweetId: number;
    tweetUrl: string;
  }[];
};
const initialState: reportState = {
  tweet: [], // 빈 배열
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
      return {
        tweet: [
          ...state.tweet, // 나머지 트윗 그대로
          { tweetId: action.tweetId, tweetUrl: action.tweetUrl },
        ],
      };

    case UNSELECT:
      return {
        tweet: state.tweet.filter((state) => state.tweetId !== action.tweetId),
      };
    default:
      return state;
  }
}
