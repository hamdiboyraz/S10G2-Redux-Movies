import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducer from "./favoritesReducer";

const reducers = combineReducers({
  movie: movieReducer,
  favorites: favoritesReducer,
});

export default reducers;
