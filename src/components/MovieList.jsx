import { Movie } from "./Movie"

function MovieList(props){
    const {movies} = props;
    return(
        <div className="moviesList">
            {movies.length ?
                movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie}/>
                )) : (
                    <h4>Ничего не найдено</h4>
                )
            }
        </div>
    )
}
export {MovieList}