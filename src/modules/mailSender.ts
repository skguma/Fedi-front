const SEND = 'email/SEND' as const;

export const send = (tweetUrl: string[]) => ({
  type: SEND,
  tweetUrl,
});

type sendState = {
  tweetUrl: string[];
};
const initialState: sendState = {
  tweetUrl: [],
};

type SendAction = ReturnType<typeof send>;

export default function mailSender(
  state: sendState = initialState,
  action: SendAction
) {
  switch (action.type) {
    case SEND:
      return { tweetUrl: action.tweetUrl };
    default:
      return state;
  }
}
