import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducer/index'
import api from './Middlewares/moviesApi'
import logger from './Middlewares/logger'
import moviesApi from './Middlewares/moviesApi'
import movieApi from './Middlewares/movieApi'
import thunkMiddleware from 'redux-thunk'

const middlewares = applyMiddleware(moviesApi, movieApi, thunkMiddleware, logger)

export const store = createStore(reducer, middlewares)

window.store = store;

