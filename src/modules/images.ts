// 액션 타입 선언

const UPLOAD = 'image/UPLOAD' as const;
const REMOVE = 'image/DELETE' as const;


// 액션 생성 함수 선언
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

// ReturnType: 함수에서 반환하는 타입 가져옴
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
