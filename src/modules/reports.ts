const SELECT = 'report/SELECT' as const;
const UNSELECT = 'report/UNSELECT' as const;
const SUSPEND = 'report/SUSPEND' as const;

export const select = (tweetId: number) => ({
  type: SELECT,
  tweetId
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
  }[];
};
const initialState: reportState = {
  tweet: [],
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
          ...state.tweet,
          { tweetId: action.tweetId },
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
