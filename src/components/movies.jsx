import React, { Component } from 'react'
import Like from './common/like'
import { getMovies } from '../services/fakeMovieService'
import { getGenres, genres } from '../services/fakeGenreService'
import Pagination from './common/pagination'
import { paginate } from '../utils/paginate'
import ListGroup from './common/listGroup'

class Movies extends Component {
    state = {
        movies: [],    //following the method we use in real world app to call back-end services to get these movies and genres
        genres: [],     //using empty array coz it will take some time to get the backend-services , meanwhile we shud not get 'undefined error'
        pageSize: 4,
        currentPage: 1
    }

    componentDidMount() {               //right place to initilize these properties to get services as we learn in lyf cycle hook. this method is called when an instanse of this component is rendered in the dom
        this.setState({ movies: getMovies(), genres: getGenres() })
    }

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre })
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page })
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
        const movies = this.state.movies.filter(m => m._id !== movie._id)   /* this is how we get movies except movie that we pass... filtering concept is imp */
        this.setState({ movies: movies })
    }

    render() {

        const { pageSize, currentPage, movies: allMovies } = this.state;

        const movieLenght = this.state.movies.length
        if (movieLenght === 0) return <div className="container"><p>There are no movies in the database</p></div>
        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div className="container">
                <p>There are total {movieLenght} movies in the the database</p>
                <div className="row">
                    <div className="col-2">
                        <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />
                    </div>
                    <div className="col">
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
                                {movies.map(movie => (
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
                        <Pagination itemsCount={movieLenght} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} currentPage={this.state.currentPage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;