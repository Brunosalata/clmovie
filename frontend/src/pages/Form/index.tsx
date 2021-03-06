import { Link } from 'react-router-dom';
import './styles.css';

function Form() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="clmovie-form-container">
            <img className="clmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="clmovie-card-bottom-container">
                <h3>"The Witcher"</h3>
                <form className="clmovie-form">
                    <div className="form-group clmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group clmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="clmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary clmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                <button className="btn btn-primary clmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default Form;