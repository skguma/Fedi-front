const SUSPEND = 'report/SUSPEND';

export const suspends = (suspendTweetId: number) => ({
  type: SUSPEND,
  suspendTweetId,
});

type suspendState = {
  suspendTweetId: number | null;
};
const initialState: suspendState = {
  suspendTweetId: null,
};

type suspendAction = ReturnType<typeof suspends>;
export default function suspender(
  state: suspendState = initialState,
  action: suspendAction
) {
  switch (action.type) {
    case SUSPEND:
      return { suspendTweetId: action.suspendTweetId };

    default:
      return state;
  }
}
