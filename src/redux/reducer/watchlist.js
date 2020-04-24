import {START, SUCCESS, ADD_TO_WATCHLIST, DELETE_FROM_WATCHLIST, GET_FAVORITES_MOVIES} from '../constants'

const defaultState = {
    favorites: [],
    favoritesMovies: [],
    loaded: false
}  

export function watchlist (initialState = defaultState, action) {
    const {type, payload} = action

    switch (type) {
        case ADD_TO_WATCHLIST:
            return {
                ...initialState,  
                favorites: initialState.favorites.concat([payload.id])
            }

        case DELETE_FROM_WATCHLIST:
            return {
                ...initialState, 
                favorites: initialState.favorites.filter(id => id !== payload.id)
            }

        case GET_FAVORITES_MOVIES: 
            return {
                ...initialState,
                favoritesMovies: initialState.favoritesMovies.concat(payload.favorites),
                loaded: true
            }
    }

    return initialState
}