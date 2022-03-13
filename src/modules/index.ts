import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import counter from './counter';
import todos from './todos';
import reports from './reports';
import posts from './posts';
import results from './results';
import images from './images';
import suspender from './suspends';
import fetchResultAPIData from './resultsData';

const persistConfig = {
  key: 'root',
  storage: storageSession, // 세션스토리지에 저장
  whitelist: ['suspender, reports,  fetchResultAPIData, results, image'], // results, image reducer만 저장
};
const rootReducer = combineReducers({
  counter,
  todos,
  reports,
  posts,
  results,
  images,
  suspender,
  fetchResultAPIData,
});

export default persistReducer(persistConfig, rootReducer);

// 추후 이 타입을 컨테이너에서 불러와서 사용해야 하므로 타입을 내보내줌
export type RootState = ReturnType<typeof rootReducer>;
