import React, { Component } from 'react'
import Like from './common/like'
import { getMovies } from '../services/fakeMovieService'
import Pagination from './common/pagination'

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleLike = (movie) => {                       /* this is how we update the view/UI. later for changes in database, when calling HTTP services this is where we call the server to persist the changes */
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
        console.log('check heart', movie)
    }

    handleDelete = (movie) => {
        console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies: movies })
    }

    render() {

        const movieLenght = this.state.movies.length
        if (movieLenght === 0) return <div className="container"><p>There are no movies in the database</p></div>
        return (
            <div className="container">
                <p>There are total {movieLenght} movies in the the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>{<Like liked={movie.liked} onClick={() => this.handleLike(movie)} />}</td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination />
            </div>
        );
    }
}

export default Movies;