import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: berenice.herrera2011@gmail.com</p>
                <p className="footer-contact-access">Mobile: +569 82834633</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.instagram.com/bereniceherreranieto/?igshid=ZGUzMzM3NWJiOQ%3D%3D"><i><FaInstagram /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;