import {START, SUCCESS, LOAD_MOVIE } from '../constants'

const defaultState = {
    movie: {},
    loading: false,
    loaded: false
}  

export function searchFilm (initialState = defaultState, action) {
    const {type, payload} = action

    switch (type) {
        case LOAD_MOVIE + START:
            return {...initialState, loading: true}
        case LOAD_MOVIE + SUCCESS:
            return {...initialState, movie: {...payload}, loading: false, loaded: true}
    }

    return initialState
}