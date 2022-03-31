const SEND = 'email/SEND' as const;
const CLEAR = 'email/CLEAR' as const;

export const send = (tweetUrl: string[]) => ({
  type: SEND,
  tweetUrl,
});

export const clear = () => ({
  type: CLEAR,
});

type sendState = {
  tweetUrl: string[];
};
const initialState: sendState = {
  tweetUrl: [],
};

type SendAction = ReturnType<typeof send> | ReturnType<typeof clear>;

export default function mailSender(
  state: sendState = initialState,
  action: SendAction
) {
  switch (action.type) {
    case SEND:
      return { tweetUrl: action.tweetUrl };
    case CLEAR:
      return { tweetUrl: null };
    default:
      return state;
  }
}
