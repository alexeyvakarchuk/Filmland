import {combineReducers} from 'redux'
import {searchFilms} from './films'
import {searchFilm} from './film'
import {watchlist} from './watchlist'

export const reducer = combineReducers({
    films: searchFilms,
    film: searchFilm,
    watchlist
})