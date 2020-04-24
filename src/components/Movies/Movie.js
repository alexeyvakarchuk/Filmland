import React from 'react'
import './MovieList.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import AddMovieButton from './AddMovieButton'
import DeleteMovieButton from './DeleteMovieButton'

const Movie = (props) => {

    const { title, year, type, poster, id, favorites } = props
    return (
        <div className='main-movie'>
            <NavLink to={`movies/${id}`} className='main-movie__link'>
                <div className='main-movie__poster'>
                    <img width='200px' heigth='auto' src={poster} alt='Movie poster' />
                </div>
                <h4 className='main-movie__title'>{title}</h4>
            </NavLink>

            <div className='main-movie__options'>
                <span>{year}, {type}</span>
                {favorites.includes(id) ? <DeleteMovieButton id={id} /> : <AddMovieButton id={id} />}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        favorites: state.watchlist.favorites
    }
}

export default connect(mapStateToProps)(Movie)