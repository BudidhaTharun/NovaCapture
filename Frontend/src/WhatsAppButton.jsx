import React from 'react';
import './Whatsapp.css'; // Import your CSS file
import whatsappLogo from './assets/whatsappicon.jpg'; // Import the WhatsApp logo image

const WhatsAppButton = () => {
    const whatsappNumber = '8247332524'; // Replace with your WhatsApp number

    return (
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp Logo" className="whatsapp-logo" />
        </a>
    );
}

export default WhatsAppButton;





