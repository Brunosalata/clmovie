
import './styles.css';
import { ReactComponent as Arrow } from 'assets/img/arrow.svg'

function Pagination() {

    return (
        <div className="clmovie-pagination-container">
            <div className="clmovie-pagination-box">
                <button className="clmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="clmovie-pagination-button" disabled={false} >
                    <Arrow className="clmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );

}

export default Pagination;