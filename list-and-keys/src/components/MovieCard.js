import './MovieCard.css'

const MovieCard = ({ title, director, removeMovie, hasOscar, rating }) => {

    return (
        <article className="movie-card">
            <h3>{title} {hasOscar && '🏆'} {rating > 3 && '⭐️'}</h3>
            <hr />
            <p>Director: {director} | Rate {rating}</p>
            <button onClick={removeMovie}>Eliminar película</button>
        </article>
    )
}

export default MovieCard