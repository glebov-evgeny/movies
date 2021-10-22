import React, {useState, useEffect} from "react";
import { MovieList } from "../components/MovieList";
import { Search } from "../components/Search"
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY

function Main() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=zorro`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.Search || [])
            setLoading(false)
        })
        .catch((err) => {
            console.error(err);
            setLoading(false)
        })
    },[])

    const searchMovies = (str, type = 'all') => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {
                setMovies(data.Search || [])
                setLoading(false)            
            })
        .catch((err) => {
            console.error(err);
            setLoading(false)
        })

    }




        return(
            <main className="main container">
                <Search searchMovies={searchMovies}/>
            { loading ? (
                <Preloader/>
                ) : (
                <MovieList movies={movies}/>
                )
            }
                
            </main>
        ) 
    }


export {Main}