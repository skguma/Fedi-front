import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import reports from './reports';
import posts from './posts';
import results from './results';
import images from './images';
import suspender from './suspends';
import mailSender from './mailSender';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: [
    'suspender, reports,  mailSender, fetchResultAPIData, results, image',
  ],
};
const rootReducer = combineReducers({
  reports,
  posts,
  results,
  images,
  mailSender,
  suspender,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
