import {LOAD_ALL_MOVIES, START, SUCCESS } from '../constants'

const defaultState = {
    foundMovies: [],
    loading: false,
    loaded: false,
    totalCount: null
}  

export function searchFilms (initialState = defaultState, action) {
    const {type, payload} = action

    switch (type) {
        case LOAD_ALL_MOVIES + START:
            return {...initialState, loading: true}
        case LOAD_ALL_MOVIES + SUCCESS:
            return {...initialState, foundMovies: payload.Search, totalCount: payload.totalResults, loading: false, loaded: true}
    }

    return initialState
}