const UPLOAD = 'image/UPLOAD' as const;
const REMOVE = 'image/DELETE' as const;

export const upload = (file: any) => ({
  type: UPLOAD,
  file,
});
export const remove = () => ({
  type: REMOVE,
});

type imageState = {
  file: any;
};
const initialState: imageState = {
  file: null,
};

type ImageAction = ReturnType<typeof upload> | ReturnType<typeof remove>;
export default function images(
  state: imageState = initialState,
  action: ImageAction
) {
  switch (action.type) {
    case UPLOAD:
      return { file: action.file };
    case REMOVE:
      return { file: null };
    default:
      return state;
  }
}
