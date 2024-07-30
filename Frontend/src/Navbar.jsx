// Navbar.jsx

import React from 'react';

  
import { useState, useEffect  } from 'react';
import { Link ,redirect,useLocation} from 'react-router-dom';
import './Navbar.css'; // Import CSS for Navbar styling
import logoImage from './assets/logo.jpg'; // Import the image file
// import BookNow from './BookNow';
function Navbar({ isLoggedIn, isLoggedOut }) {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // Find the link corresponding to the current URL path
        const currentLink = document.querySelector(`.nav-links li a[href='${location.pathname}']`);
        // Add "active" class to the current link
        if (currentLink) {
            currentLink.classList.add("active");
            setActiveLink(currentLink);
        }
    }, [location.pathname]);

    const handleNavLinkClick = (event) => {
        // Remove "active" class from previously active link
        if (activeLink) {
            activeLink.classList.remove("active");
        }
        // Add "active" class to the clicked link
        event.target.classList.add("active");
        // Update activeLink state
        setActiveLink(event.target);
        // setIsNavOpen(false);
    };
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Function to toggle the visibility of the navigation links
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
   
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        document.location.reload();
        window.location.replace('/');
    }

    var x = localStorage.getItem('token');
    console.log(x)
    return (
        
        <div>
            {/* <Navbar /> */}
            
            <nav className={`navbar ${isNavOpen ? 'open navbar-expanded' : ''}`}>
                <div className="containernav">
                    <Link to="/" className="logo">
                        <img src={logoImage} alt="Photography Logo" /> {/* Use img tag with src attribute */}
                        <span className="logo-text">NOVA CAPTURE</span> {/* Insert your text here */}
                    </Link>
                    <div className="menu-bar" onClick={toggleNav}>
                      <span></span>
                      <span></span>
                      <span></span>
                    
                </div>
                
                    <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                        <li><Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link></li>
                        <li><Link to="/about" className="nav-link" onClick={handleNavLinkClick}>About Us</Link></li>
                        <li><Link to="/service" className="nav-link" onClick={handleNavLinkClick}>Services</Link></li>
                        <li><Link to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact Us</Link></li>
                      
                        
                    </ul>
                    <div className="buttons register-book-container">
                        {/* <a href="#" className="btn" ><Link to="/register" className="active">Register/Login</Link></a>
                        <a href="#" className="btn"><Link to="/booknow" className="active">BookNow</Link></a>
                         */}
                          {x ? ( // Render Logout button if logged 
                          <button onClick={handleLogout} className="btn logout-btn">Logout</button>
                        ) : (
                          <Link to="/register" className="btn">Register/Login</Link>
                        )}
                        {x ? <Link to="/booknow" className="btn">BookNow</Link>: <Link to="/register" className="btn">BookNow</Link>}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
