import { combineReducers } from 'redux';
import user from './user';
import { persistReducer } from 'redux-persist'; // 추가
import storage from 'redux-persist/lib/storage'; // 추가

const persistConfig = {
  key: 'root',
  storage,
}; // 추가

const rootReducer = combineReducers({
  user,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // 추가

export default persistedReducer;
export type RootState = ReturnType<typeof persistedReducer>;
