import React from 'react'
import favorites from './star.png'
import './MovieList.css'
import { connect } from 'react-redux'
import {deleteFromWatchlist} from '../../redux/AC/index'

const DeleteMovieButton = (props) => {

    const onDeleteFromWatchlist = () => {
        props.deleteFromWatchlist(props.id)
        console.log(props.id)
    }
    return (
        <button onClick={onDeleteFromWatchlist}>Delete<img src={favorites} className='favorites favorites__delete' alt='Delete from watchlist'/></button>
    )
}

export default connect(null, {deleteFromWatchlist})(DeleteMovieButton)