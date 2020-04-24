import {
  LOAD_ALL_MOVIES,
  LOAD_MOVIE,
  ADD_TO_WATCHLIST,
  DELETE_FROM_WATCHLIST,
  GET_FAVORITES_MOVIES,
} from "../constants";
import axios from "axios";

const callApi = "https://www.omdbapi.com";

export const getFilms = (title) => {
  return {
    type: LOAD_ALL_MOVIES,
    title,
    callMoviesAPI: callApi,
  };
};

export const getFilm = (id) => {
  return {
    type: LOAD_MOVIE,
    id,
    callMovieAPI: callApi,
  };
};

export const addToWatchlist = (id) => {
  return {
    type: ADD_TO_WATCHLIST,
    payload: { id },
  };
};

export const deleteFromWatchlist = (id) => {
  return {
    type: DELETE_FROM_WATCHLIST,
    payload: { id },
  };
};

export const getFavoritesMovies = (favoritesArr) => {
  return {
    type: GET_FAVORITES_MOVIES,
    payload: { favorites: favoritesArr },
  };
};

export const getFavoritesMoviesThunk = (ids) => {
  return (dispatch) => {
    const favoritesArr = [];

    // ids.forEach((id) => {

    //   console.log(favoritesArr);
    //   return favoritesArr;
    // });

    for (let i = 0; i < ids.length; i++) {
      const options = {
        method: "get",
        url: callApi,
        params: {
          apiKey: "9e432373",
          i: ids[i],
        },
        // transformResponse: [
        //   (data) => {
        //     const result = JSON.parse(data);
        //     favoritesArr.push(result);
        //     dispatch(getFavoritesMovies(favoritesArr));
        //   },
        // ],
      };

      axios(options).then((res) => {
        console.log(res.data);
        favoritesArr.push(res.data);
      });
    }

    console.log(favoritesArr);

    dispatch(getFavoritesMovies(favoritesArr));
  };
};

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: { callApi },
//     headers: {
//         'API-KEY': '99475e3c-d85b-4c98-92fb-966fc8ae142e'
//     }
// })

// export const getFavoritesMoviesThunk = (ids) => {
//     return (dispatch) => {
//         const favoritesArr = []

//         const mapingArr = ids.map(id => {
//             instance.get(`i=${id}`)
//                 .then(res => res.json())
//                 .then(response => favoritesArr.push(response))
//                 .then(() => dispatch(getFavoritesMovies(favoritesArr)))
//         })
//      }
// }
