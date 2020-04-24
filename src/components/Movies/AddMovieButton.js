import React from 'react'
import favorites from './star.png'
import './MovieList.css'
import { connect } from 'react-redux'
import {addToWatchlist} from '../../redux/AC/index'

const AddMovieButton = (props) => {

    const onAddToWatchlist = () => {
        props.addToWatchlist(props.id)
        console.log(props.id)
    }
    return (
        <button onClick={onAddToWatchlist}>Add<img src={favorites} className='favorites favorites__add' alt='Add to watchlist'/></button>
    )
}

export default connect(null, {addToWatchlist})(AddMovieButton)