import React from 'react'
import { getFilm } from '../../redux/AC/index'
import { connect } from 'react-redux'
import imdb from './imdb.png'
import AddMovieButton from './AddMovieButton'
import DeleteMovieButton from './DeleteMovieButton'


class MoreInfoMovie extends React.Component {

    state = {
        filmID: this.props.match.params.filmID
    }

    componentDidMount() {
        this.props.getFilm(this.state.filmID)
    }


    render() {

        const { Title, Year, Released, Runtime, Genre, Director,
            Writer, Actors, Plot, Language, Country, Awards, Poster,
            Ratings, imdbRating, imdbVotes, Type, DVD } = this.props.movie

        const { favorites } = this.props

        return <div className='movie-more'>
            <div className='movie-more__info'>
                <h1 className='movie-more__title'>
                    {Title}
                </h1>
                <p>{Actors}</p>
                <p>{Plot}</p>
                <span className='movie-more__genre'>{Year}, {Genre}</span>
                <div className='movie-more__details'>
                    <div className='movie-more__rating'>
                        <img src={imdb} alt='rating' className='movie-more__rating-img' />
                        <p>{imdbRating}</p>
                    </div>
                    <div className='movie-more__btn'>
                        {favorites.includes(this.state.filmID) ? <DeleteMovieButton id={this.state.filmID} /> : <AddMovieButton id={this.state.filmID} />}
                    </div>
                </div>
            </div>

            <div className='movie-more__poster'>
                <img src={Poster} alt='Poster' />
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.film.movie,
        favorites: state.watchlist.favorites
    }
}

export default connect(mapStateToProps, { getFilm })(MoreInfoMovie)