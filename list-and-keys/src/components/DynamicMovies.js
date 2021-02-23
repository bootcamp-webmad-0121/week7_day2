import { Component } from 'react'
import MovieCard from './MovieCard'

import { fullMovies as theMovies } from './../fakeApi'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: theMovies,
            showOscarAwarded: false
        }
    }

    deleteMovie(movieId) {
        this.setState({
            movies: this.state.movies.filter(elm => elm._id !== movieId)
        })
    }

    toggleMovies() {
        this.setState({
            showOscarAwarded: !this.state.showOscarAwarded
        })
    }

    addMovie() {
        let now = new Date()
        const movie = { _id: now.getTime(), title: "Megalodón VS Crocosaurio", director: "Amodóvar", hasOscar: true, rating: 5 }

        const mvoiesCopy = [...this.state.movies]
        mvoiesCopy.push(movie)

        this.setState({
            movies: mvoiesCopy
        })
    }


    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscar === this.state.showOscarAwarded)

        return (
            <section>

                <h2>Películas dinámicas</h2>

                {filteredMovies.map(elm => <MovieCard {...elm} removeMovie={() => this.deleteMovie(elm._id)} key={elm._id} />)}

                <button onClick={() => this.toggleMovies()} className="toggler">Mostrar películas {this.state.showOscarAwarded ? 'sin' : 'con'} oscar</button>
                <button onClick={() => this.addMovie()} className="toggler">Añadir película al estado</button>

                <hr />

            </section>
        )
    }
}


export default MoviesList