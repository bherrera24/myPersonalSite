import { FaGithub, FaLinkedin } from "react-icons/fa";
import BerePicture from '../assets/BerePicture.jpg';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='berepicture' src={BerePicture} />

                    <div className="body-content">
                        <div className="body-headline">Berenice Herrera</div>
                        <div className="body-text">Full Stack Developer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/bherrera24/bherrera24" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
                        <a href="https://www.linkedin.com/in/berenice-herrera/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin/></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;