import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { useEffect } from "react";

function Listing() {

    // FORMA ERRADA
    // axios.get(`${BASE_URL}/movies?size=12&page=0`)
    //    .then(response => {
    //        console.log(response.data);
    //    });

const [pageNumber, setPageNumber] = useState(0);

    // FORMA CORRETA - usando React hook
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            const data = response.data as MoviePage;
        });
    }, []);

    return (
        <>
        <p>{pageNumber</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;