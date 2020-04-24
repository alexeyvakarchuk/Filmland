import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import Movie from './Movie'
import './MovieList.css'

class MovieList extends React.Component {
    render() {
        const { films, loaded } = this.props

        if (!loaded) return <h2>Loading...</h2>

        if (loaded) return (
            <div>
                <ul className='main-movie_list'>
                    {films.map(m => <li key={m.imdbID}>
                        <Movie title={m.Title}
                            year={m.Year}
                            poster={m.Poster}
                            type={m.Type}
                            id={m.imdbID} />
                    </li>)}
                </ul>
            </div>
        )

        return null
    }
}

const mapStateToProps = (state) => {
    return {
        films: state.films.foundMovies,
        loaded: state.films.loaded
    }
}

export default connect(mapStateToProps)(MovieList)