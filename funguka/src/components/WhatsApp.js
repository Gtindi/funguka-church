import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import '../assets/css/templatemo-space-dynamics.css';

const WhatsApp = () => {
    return(
        <div className="whatsapp-button">
            <a href="https://wa.me/+255712345678" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    )
}
export default WhatsApp;