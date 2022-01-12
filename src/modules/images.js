const UPLOAD = "image/UPLOAD"; // 이미지 업로드하는 액션
const REMOVE = "image/DELETE"; // 이미지 삭제하는 액션

// 액션 생성함수
export const upload = file => ({
  type: UPLOAD,
  file
});
export const remove = () => ({
  type: REMOVE
});

const initialState = {
  file: null // 사용자가 업로드한 사진 (1장)
};

export default function images(state = initialState, action) {
  switch (action.type) {
    case UPLOAD:
      return { file: action.file };
    case REMOVE:
      return { file: null };
    default:
      return state;
  }
}
