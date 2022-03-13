const UPLOAD = 'image/UPLOAD' as const;
const REMOVE = 'image/DELETE' as const;

// 액션 생성함수
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
  file: null, // 사용자가 업로드한 사진 (1장)
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
