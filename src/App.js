import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./components/Search";
import "./App.css";
import { store } from "./redux/store";
import MovieList from "./components/Movies/MovieList";
import MoreInfoMovie from "./components/Movies/MoreInfoMovie";
import Watchlist from "./components/Watchlist/Watchlist";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="main">
          <Route path="/" component={Search} />
          <Route path="/movies" component={MovieList} exact />
          <Route path="/movies/:filmID" component={MoreInfoMovie} exact />
          <Watchlist />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
