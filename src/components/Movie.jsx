function Movie(props){
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster

    } = props;

    return(

        <div className="card movie" id={id}>
            <div className="card-image">
                {
                    poster === 'N/A' ? 
                    (<img src={`https://via.placeholder.com/300x450.png?text=${title}`} alt=''/>) 
                    : 
                    <img src={poster} alt=''/>
                }       
            </div>
            <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{year}, {type}</p>
            </div>
        </div>
    )
}
export {Movie}