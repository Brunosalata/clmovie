import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

tupe Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props ) {

    return (
        <div>
            <img className="clmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="clmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                
                <Link to={`/form/${movie.id}`}>
                <div className="btn btn-primary clmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>

    );
}

export default MovieCard;