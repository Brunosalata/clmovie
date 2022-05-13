import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore (){

const score = 3.5;
const count = 13;

return(
    <div className="clmovie-score-container">
    <p className="clmovie-score-value">{score > 0 ? score.toFixed(1) : 'Seja o primeiro a avaliar!'}</p>
    <MovieStars />
    <p className="clmovie-score-count">{count} avaliações</p>
</div>  
);
}

export default MovieScore;