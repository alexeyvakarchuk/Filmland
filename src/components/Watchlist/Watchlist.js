import React from "react";
import { MovieList } from "../Movies/MovieList";
import { connect } from "react-redux";
import { getFavoritesMoviesThunk } from "../../redux/AC/index";

class Watchlist extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.favorites.length !== this.props.favorites.length) {
      this.props.getFavoritesMoviesThunk(this.props.favorites);
    }
  }

  render() {
    const { favoritesMovies, loaded } = this.props;

    if (!loaded) return <h1>Loading...</h1>;

    return <MovieList films={favoritesMovies} loaded={loaded} />;
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.watchlist.favorites,
    favoritesMovies: state.watchlist.favoritesMovies,
    loaded: state.watchlist.loaded,
  };
};

export default connect(mapStateToProps, { getFavoritesMoviesThunk })(Watchlist);
