import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import'./styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="clmovies-nav-content">
                    <h1>CLMovie</h1>
                    <a href="https://github.com/Brunosalata">
                        <div className="clmovies-contact-container">
                            <GithubIcon />
                            <p className="clmovies-contact-link"> /Brunosalata</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;