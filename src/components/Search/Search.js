import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import './Search.css'
import { getFilms } from '../../redux/AC/index'
import search from './search.png'

class Search extends Component {
    state = {
        title: ''
    }

    onValueChange = (ev) => {
        this.setState({
            title: ev.currentTarget.value
        })
    }

    onSearchFilmsClick = () => {
        this.props.getFilms(this.state.title)
    }
    
    render() {
        return (
            <div className='main-search'>
                <input type='text'
                    placeholder='What do you want to see?'
                    onChange={this.onValueChange} />

                <NavLink to='/movies'><button onClick={this.onSearchFilmsClick}><img src={search}/></button></NavLink>
            </div>
        )
    }
}

export default connect(null, {
    getFilms
})(Search)

