import axios from "axios";
import { START, SUCCESS } from "../constants";

export default (store) => (next) => (action) => {
  const { callMoviesAPI, type, title } = action;

  if (!callMoviesAPI) return next(action);

  const options = {
    method: "get",
    url: callMoviesAPI,
    params: {
      apiKey: "9e432373",
      s: title,
    },
    transformResponse: [
      (data) => {
        const result = JSON.parse(data)

        next({ type: type + SUCCESS, payload: result });
      },
    ],
  };

  if (!title.length) {
    next(action) 
  } else {
    next({ type: type + START });
    axios(options);
  }


};
