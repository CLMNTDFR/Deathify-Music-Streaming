//Footer.js
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='tbs-footer'>
            <div className='tbs-footer-text'>
                {currentYear} Deathify - All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
