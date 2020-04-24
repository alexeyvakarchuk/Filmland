import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./reducer/index";
import api from "./Middlewares/moviesApi";
import logger from "./Middlewares/logger";
import moviesApi from "./Middlewares/moviesApi";
import movieApi from "./Middlewares/movieApi";
import thunkMiddleware from "redux-thunk";

const middlewares = [
  applyMiddleware(moviesApi),
  applyMiddleware(movieApi),
  applyMiddleware(thunkMiddleware),
  applyMiddleware(logger),
];

// export const store = createStore(reducer, middlewares)

export const store =
  process.env.NODE_ENV === "production"
    ? createStore(reducer, {}, compose(...middlewares))
    : createStore(
        reducer,
        {},
        compose(
          ...middlewares,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      );
