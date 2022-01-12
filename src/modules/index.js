import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import counter from "./counter";
import todos from "./todos";
import reports from "./reports";
import posts from "./posts";
import results from "./results";
import images from "./images";

const persistConfig = {
  key: "root",
  storage: storageSession, // 세션스토리지에 저장
  whitelist: ["results, image"] // results, image reducer만 저장
};
const rootReducer = combineReducers({
  counter,
  todos,
  reports,
  posts,
  results,
  images
});

export default persistReducer(persistConfig, rootReducer);
