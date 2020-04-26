import {
  START,
  SUCCESS,
  ADD_TO_WATCHLIST,
  DELETE_FROM_WATCHLIST,
  GET_FAVORITES_MOVIES,
} from "../constants";

const defaultState = {
  favorites: [],
  favoritesMovies: [],
  loaded: false,
};

export function watchlist(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        favorites: [...state.favorites, payload.id],
      };

    case DELETE_FROM_WATCHLIST:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== payload.id),
        favoritesMovies: state.favoritesMovies.filter(
          ({ imdbID }) => imdbID !== payload.id
        ),
      };

    case GET_FAVORITES_MOVIES:
      return {
        ...state,
        favoritesMovies: payload.favorites,
        loaded: true,
      };
  }

  return state;
}
