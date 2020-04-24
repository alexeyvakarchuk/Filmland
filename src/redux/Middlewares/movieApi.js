import axios from "axios";
import { START, SUCCESS } from "../constants";

export default (store) => (next) => (action) => {
  const { callMovieAPI, type, id } = action;

  if (!callMovieAPI) return next(action);


  const options = {
    method: "get",
    url: callMovieAPI,
    params: {
      apiKey: "9e432373",
      i: id,
    },
    transformResponse: [
      (data) => {
        const result = JSON.parse(data)
        next({ type: type + SUCCESS, payload: result });
      },
    ],
  };


    next({ type: type + START });

    axios(options);

};