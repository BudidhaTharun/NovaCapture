import React, { useState } from 'react';
import Navbar from './Navbar';
import './ServiceSection.css';
// import './mini/saree/s1.jpeg'; 

const ServiceSection = () => {
  const [activeSection, setActiveSection] = useState('wedding');
  const [searchQuery, setSearchQuery] = useState('');

//   const handleSectionClick = (section) => {
//     setActiveSection(section);
// };
const handleSectionClick = (section) => {
    if (section === 'shootLocations') {
      // For shoot locations, set activeSection to the location itself
      setActiveSection(section);
    } else {
      setActiveSection(section);
    }
    if (section === 'otherCeremonies') {
        // Set the active section to 'namingCeremony' specifically when entering 'otherCeremonies'
        setActiveSection('namingCeremony');
      } else {
        setActiveSection(section);
      }
  };
  
  
  const shootLocations = ['Hyderabad', 'Goa', 'Mumbai', 'Agra'];

  const filteredShootLocations = shootLocations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Image data for each shoot location
  const imageData = {
    Hyderabad: [
      { id: 1, src: '/mini/shoots/hyd/img1.jpg' },
      { id: 2, src: '/mini/shoots/hyd/img6.jpg'},
      { id: 3, src: '/mini/shoots/hyd/img3.jpg' },
      { id: 4, src: '/mini/shoots/hyd/img7.jpg' },
      { id: 5, src: '/mini/shoots/hyd/img2.jpg' },
      { id: 6, src: '/mini/shoots/hyd/img9.jpeg' },
      { id: 7, src: '/mini/shoots/hyd/img10.jpeg' },
      { id: 8, src: '/mini/shoots/hyd/img11.jpeg' },
      { id: 9, src: '/mini/shoots/hyd/img12.jpeg'},
      { id: 10, src: '/mini/shoots/hyd/img13.jpeg'},
      { id: 11, src: '/mini/shoots/hyd/img14.jpeg' },
      { id: 12, src: '/mini/shoots/hyd/img15.jpeg' },
      { id: 13, src: '/mini/shoots/hyd/img16.jpeg'},
      { id: 13, src: '/mini/shoots/hyd/img4.jpg' },
      { id: 13, src: '/mini/shoots/hyd/img20.jpeg'},
      // Add more images as needed
    ],
    Goa: [
        { id: 10, src: '/mini/shoots/goa/img20.jpg' },
      { id: 1, src: '/mini/shoots/goa/img8.jpeg' },
      { id: 11, src: '/mini/shoots/goa/img1.jpeg' },
      { id: 2, src: '/mini/shoots/goa/img5.jpeg' },
      { id: 3, src: '/mini/shoots/goa/img2.jpeg'},
      { id: 4, src: '/mini/shoots/goa/img3.jpeg' },
      { id: 5, src: '/mini/shoots/goa/img21.jpg'},
      { id: 6, src: '/mini/shoots/goa/img11.jpeg'},
      { id: 7, src: '/mini/shoots/goa/img13.jpg' },
      { id: 8, src: '/mini/shoots/goa/img22.jpg' },
    //   { id: 9, src: '/mini/shoots/goa/img12.jpg', alt: 'Eating Panda' },
  
      // Add more images as needed
    ],
    Mumbai: [
      { id: 1, src: '/mini/shoots/mumbai/img1.jpeg'},
      { id: 2, src: '/mini/shoots/mumbai/img9.jpeg' },
      { id: 3, src: '/mini/shoots/mumbai/img5.jpg' },
      { id: 4, src: '/mini/shoots/mumbai/img7.jpeg' },
      { id: 5, src: '/mini/shoots/mumbai/img6.jpeg' },
      { id: 6, src: '/mini/shoots/mumbai/img10.jpeg' },
      { id: 7, src: '/mini/shoots/mumbai/img2.jpeg' },
      { id: 8, src: '/mini/shoots/mumbai/img3.jpeg' },
      { id: 9, src: '/mini/shoots/mumbai/img8.jpeg' },
      { id: 10, src: '/mini/shoots/mumbai/img11.jpeg' },
      // Add more images as needed
    ],
    Agra: [
    { id: 2, src: '/mini/shoots/agra/img8.jpeg' },
      { id: 1, src: '/mini/shoots/agra/img1.jpg' },
      { id: 2, src: '/mini/shoots/agra/img7.jpeg' },
      { id: 6, src: '/mini/shoots/agra/img13.jpg' },
      { id: 3, src: '/mini/shoots/agra/img4.jpeg' },
      { id: 4, src: '/mini/shoots/agra/img3.jpeg' },
      { id: 4, src: '/mini/shoots/agra/img11.jpeg' },
      { id: 5, src: '/mini/shoots/agra/img2.jpg'},
      { id: 6, src: '/mini/shoots/agra/img9.jpg' },
      { id: 2, src: '/mini/shoots/agra/img6.jpeg' },
     
      // Add more images as needed
    ],
  };
//   const searchIcon = require('./mini/saree/s1.jpeg'); // Replace with your search icon image path
  const handleSearchClick = () => {
    // Simulate search functionality here (replace with your actual search logic)
    console.log('Search initiated for:', searchQuery);
  };
  return (
    <div>
        <Navbar />
    <div className='bgservice'>
    <div className="service-section">
      {/* <h2>Service Section</h2> */}
      <div className="buttonservice">
      <button  className={`weddingbutton ${activeSection === 'wedding' ? 'active' : ''}`} onClick={() => handleSectionClick('wedding')}>
  Wedding
</button>

        <button className={`weddingbutton ${activeSection === 'preWedding' ? 'active' : ''}`} onClick={() => handleSectionClick('preWedding')}>
          Pre-Wedding
        </button>
        <button className={`weddingbutton ${activeSection === 'birthday' ? 'active' : ''}`} onClick={() => handleSectionClick('birthday')}>
          Birthday
        </button>
        <button className={`weddingbutton ${activeSection === 'shootLocations' ? 'active' : ''}`} onClick={() => handleSectionClick('shootLocations')}>
          Shoot Locations
        </button>
        <button className={`weddingbutton ${activeSection === 'otherCeremonies' ? 'active' : ''}`} onClick={() => handleSectionClick('otherCeremonies')}>
          Other Ceremonies
        </button>
      </div>
      <div>
          {activeSection === 'wedding' && (
         <div class="wrapper">
        
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="/mini/wedding/img5.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Mangala Snanam</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="/mini/wedding/img2.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Handfasting</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="/mini/wedding/img1.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Bride</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="/mini/wedding/img11.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Mangalasutra</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="/mini/wedding/img4.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Haldi</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="/mini/wedding/img6.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Panigrahana</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
   {activeSection === 'preWedding' && (
         <div class="wrapper">
        
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="/mini/pre-wedding/image1.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Calendar Charm</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="/mini/pre-wedding/image9.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Boat-Bound Romance</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="/mini/pre-wedding/image2.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Frozen love</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="/mini/pre-wedding/img17.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>BeachSide Bliss</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="/mini/pre-wedding/image5.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Melody Mates</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="/mini/pre-wedding/img13.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Glance of forever</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
 {activeSection === 'birthday' && (
         <div class="wrapper">
        
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="/mini/birthday/image2.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>One year</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="/mini/birthday/image5.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Half Birthday</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="/mini/birthday/image6.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Slice of Happiness</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="/mini/birthday/image1.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Family</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="/mini/birthday/image3.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Happy Birthday Highlights</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="/mini/birthday/image4.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Pre-Birthday shoot</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
{activeSection === 'shootLocations' && (
  <div>
    <input
      className='searchshoot'
      type="text"
      placeholder="Search locations..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    {/* <img
          src="/mini/saree/s1.jpeg"
          alt="Search Locations"
          className="search-icon"
          onClick={handleSearchClick}
        /> */}
      {/* Add your search icon here */}
    
    <div className="wrapper">
      <div className="gallery">
        {filteredShootLocations.map((location) => (
          <div className='shoot-headings' key={location}>
            <h3>{location}</h3>
            <div className="location-images">
              {imageData[location].map((image) => (
                <div className="gallery__item" key={image.id}>
                  <a href="#" className="gallery__link">
                    <img src={image.src} alt={image.alt} className="gallery__image" />
                    <div className="gallery__overlay">
                      <span>{image.alt}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
        {activeSection === 'otherCeremonies' && (
          // Display images related to other ceremonies
          <div className="other-ceremony-buttons">
            {/* <h3>Other Ceremonies</h3> */}
            <div>
              <button className="weddingbutton" onClick={() => handleSectionClick('namingCeremony')}>Naming Ceremony</button>
              <button   className="weddingbutton"  onClick={() => handleSectionClick('houseWarmingCeremony')}>House Warming Ceremony</button>
              <button   className="weddingbutton" onClick={() => handleSectionClick('sareeFunctionCeremony')}>Saree Function Ceremony</button>
            </div>
          </div>
        )}
        {activeSection === 'namingCeremony' && (
         <div class="wrapper">
         <div className='threebutton'>
              <button   className="weddingbutton otherbutton" onClick={() => handleSectionClick('namingCeremony')}>Naming Ceremony</button>
              <button   className="weddingbutton otherbutton"  onClick={() => handleSectionClick('houseWarmingCeremony')}>House Warming Ceremony</button>
              <button   className="weddingbutton otherbutton" onClick={() => handleSectionClick('sareeFunctionCeremony')}>Saree Function Ceremony</button>
            </div>
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="/mini/naming/img1.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Parental Bliss</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="/mini/naming/img5.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Infant Love Loop</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="/mini/naming/img2.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Cherubic Nap</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="/mini/naming/img11.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Cutie's Reflection</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="/mini/naming/img8.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Baby's Glimpse</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="/mini/naming/img7.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Cradle Clicks</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
    
 )}
        {activeSection === 'houseWarmingCeremony' && (
         <div class="wrapper">
        <div className='threebutton'>
              <button className="weddingbutton otherbutton" onClick={() => handleSectionClick('namingCeremony')}>Naming Ceremony</button>
              <button   className="weddingbutton otherbutton"  onClick={() => handleSectionClick('houseWarmingCeremony')}>House Warming Ceremony</button>
              <button   className="weddingbutton otherbutton" onClick={() => handleSectionClick('sareeFunctionCeremony')}>Saree Function Ceremony</button>
            </div>
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="/mini/house/img9.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>HouseWarming Elegance</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="/mini/house/img4.jfif" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Blessings in Overflow</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="/mini/house/img10.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Harmony Clicks</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="/mini/house/img8.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Sacred Snaps</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="/mini/house/img15.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>HomeComing Happiness</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="/mini/house/img12.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Delight Duo</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
{activeSection === 'sareeFunctionCeremony' && (
         <div class="wrapper">
        <div className='threebutton'>
              <button className="weddingbutton otherbutton" onClick={() => handleSectionClick('namingCeremony')}>Naming Ceremony</button>
              <button   className="weddingbutton otherbutton"  onClick={() => handleSectionClick('houseWarmingCeremony')}>House Warming Ceremony</button>
              <button   className="weddingbutton otherbutton" onClick={() => handleSectionClick('sareeFunctionCeremony')}>Saree Function Ceremony</button>
            </div>
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <a href="#" class="gallery__link">
                    <img src="/mini/saree/img9.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Blessing Bliss</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--2">
                <a href="#" class="gallery__link">
                    <img src="/mini/saree/img8.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Saree squad</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--3">
                <a href="#" class="gallery__link">
                    <img src="/mini/saree/img10.jpg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Saree Saga </span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--4">
                <a href="#" class="gallery__link">
                    <img src="/mini/saree/img11.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Hidden Splendor</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--5">
                <a href="#" class="gallery__link">
                    <img src="/mini/saree/img5.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Cheerful Clicks</span>
                    </div>
                </a>
            </div>
            <div class="gallery__item gallery__item--6">
                <a href="#" class="gallery__link">
                    <img src="/mini/saree/img6.jpeg" class="gallery__image" />
                    <div class="gallery__overlay">
                        <span>Blossom Beauty</span>
                    </div>
                </a>
            </div>
        </div>

    </div>
 )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ServiceSection;
