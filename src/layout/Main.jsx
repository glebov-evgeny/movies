import React from "react";
import { MovieList } from "../components/MovieList";
import { Search } from "../components/Search"
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component{
    state = {
        movies: [],
        loading: true
    }

    componentDidMount(){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=zorro`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch((err) => {
            console.error(err);
            this.setState({
                loading: false
            })
        })
    }

    searchMovies = (str, type = 'all') => {
        this.setState({
            loading: true
        })
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({ movies: data.Search || [], loading: false }))
        .catch((err) => {
            console.error(err);
            this.setState({
                loading: false
            })
        })

    }

    render (){
        const {movies, loading} = this.state;

        return(
            <main className="main container">
                <Search searchMovies={this.searchMovies}/>
            { loading ? (
                <Preloader/>
                ) : (
                <MovieList movies={movies}/>
                )
            }
                
            </main>
        ) 
    }
}

export {Main}