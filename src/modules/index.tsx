import { combineReducers } from "redux";
import user from "./user";
import recruitList from "./recruitList";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	user,
	recruitList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
export type RootState = ReturnType<typeof persistedReducer>;
