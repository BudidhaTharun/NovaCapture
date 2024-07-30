import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './ContactUs.css';
import Navbar from './Navbar';
import whatsappLogo from './assets/whatsappicon.jpg'; 
import instaLogo from './assets/insta.png';
import faceLogo from './assets/Facebook-icon.png';

const ContactUs= ({ photographer }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
        
    };
    const whatsappNumber = '8247332524'; 
  return (
    <div className='bgimage'>
    <div>
      <Navbar />
     
    <div className="about">
      <div className="about-details">
        <h2>Photographer Details</h2>
        <div className="details">
          <div className="detail">
            <strong>Name:</strong> {photographer.name}
          </div>
          <div className="detail">
            <strong>Email:</strong> <a href={"mailto:" + photographer.email}>{photographer.email}</a>
          </div>
          <div className="detail">
            <strong>Instagram:</strong> <a href={"https://www.instagram.com/" + photographer.instagram}>@{photographer.instagram}</a>
          </div>
          <div className="detail">
            <strong>Phone:</strong> {photographer.phoneNumber}
       
          </div>
          <div className="detail">
            <strong>Experience:</strong> {photographer.experience} years
          </div>
          <div>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp Logo" className="whatsapp-logo" /> </a>
            <a href="https://www.instagram.com/chandu_uias" target="_blank" rel="noopener noreferrer">
            <img src={instaLogo} alt="Instagram" className="insta-logo" /></a>
            <a href="https://www.facbook.com/chandu.uias?mibexid=ZdWKwL" target="_blank" rel="noopener noreferrer">
            <img src={faceLogo} alt="Instagram" className="face-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="photographer-image">
        <img src="Camera Photography Dp for Girls.jfif" alt="Photographer" />
      </div>
    </div>
    

    <div className="other-collections"> {/* Modify the class name here */}
    <h2 className='h2other'>Other Collections</h2>
    <div className="slider-container">
    <Slider {...settings}>
  
      <div>
        <img   className='carouselimg'src="/mini/shoots/others/img1.jpg" alt="Other Image 1" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img7.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img3.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img4.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img   className='carouselimg'src="/mini/shoots/others/img8.jpg" alt="Other Image 1" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img9.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img5.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img10.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img16.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img11.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img12.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img13.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img14.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img15.jpg" alt="Other Image 2" />
      </div>
      <div>
        <img  className='carouselimg'src="/mini/shoots/others/img6.jpg" alt="Other Image 2" />
      </div>
    </Slider>
    </div>
  </div> 
  </div>
</div>

  );
};

export default ContactUs;
