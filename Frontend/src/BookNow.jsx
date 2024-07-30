import React, { useState } from 'react';
import './BookNow.css'
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function BookNow () {
  // State variables to store form data
  const form = useRef();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState(''); // wedding, pre-wedding, etc.
  const [shootPlace, setShootPlace] = useState(''); // Hyderabad, Delhi, etc.
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [contactNumber, setContactNumber] = useState('');
   // State variable to store error message
  const [isSubmitting, setIsSubmitting] = useState(false); // State variable to track form submission
  const navigate=useNavigate();
  const [data,setData]=useState([]);
  const [bookSuccessMessage, setBookSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [booksubmit,setBookSubmit]=useState(false);
  const [error, setError] = useState(null);
 
  const [formData, setFormData] = useState({});
  

  // const handleClick=()=>{
  //   navigate('/');
  // }
  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      from_name: fullName,
      from_email: email,
      event_type: eventType,
      shoot_place: shootPlace,
      from_date: fromDate,
      to_date: toDate,
      contact_number: contactNumber,
      message: '', // You can include a message field if needed
    };

    emailjs
      .sendForm('service_8qsmjig', 'template_ske3rql', form.current, 'zEsOkKCEFZXm1dtok')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setErrorMessage('');
          setFullName('');
          setEmail('');
          setEventType('');
          setShootPlace('');
          setFromDate('');
          setToDate('');
          setContactNumber('');
        },
        (error) => {
          console.log('FAILED...', error);
          setErrorMessage('Failed to send email. Please try again later.');
        }
      );
    //setIsSubmitting(true);
    // You can handle form submission here, like sending data to backend or displaying a message
    console.log({ fullName, email, eventType, shootPlace, fromDate, toDate, contactNumber });
    // Reset form fields after submission
    // setFullName('');
    // setEmail('');
    // setEventType('');
    // setShootPlace('');
    // setFromDate('');
    // setToDate('');
    // setContactNumber('');
    // setErrorMessage('');
    if (!fullName || !email || !eventType || !shootPlace || !fromDate || !toDate || !contactNumber) {
      setError("All fields are required.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8001/booked", {
        fullName, email, eventType, shootPlace, fromDate, toDate, contactNumber
      })
      setBookSubmit(true);
            setError(null); // Clear any previous error messages
     
      //navigate('/');
      //window.location.href = '/';
    
      setBookSuccessMessage('Booked successfully');
        setTimeout(() => {
          // navigate('/');
          
        }, 1000);
     
    }
    catch(e)
    {
      console.error("Failed to book",e);
      setError('Failed to book. Please try again later.');
      // setError("Failed to book: " + error.message);
      // setIsSubmitting(false);
      setBookSuccessMessage('');
      setErrorMessage('Failed to Book. Please try again later.');
   
    }
  };
//   try {
//     await axios.post("http://localhost:7015/booked", {
//       fullName, email, eventType, shootPlace, fromDate, toDate, contactNumber
//     });
    
//     navigate('/bookedDetails'); // Navigate to bookedDetails after successful submission
//   } catch (error) {
//     console.error("Failed to book:", error);
//   }
// };

 const handleClick = () => {
//  alert("Your Booking is Succesful Thank you!!");
//  if(booksubmit)
setTimeout(() => {
  navigate('/');
}, 1000);
  

  // navigate('/bookedDetails', { state: { fullName, email, eventType, shootPlace, fromDate, toDate, contactNumber } });
};
  return (
    <div className='fullbook'>
    <div>
      <Navbar />
     
      <h2 className='container2'>Book Now</h2>
      <form onSubmit={handleSubmit} className='containerbook' ref={form}>
        <div className='fullclass'>
          <label className='labelfull' htmlFor="fullName" >Full Name:</label>
          <input
          className='full'
            type="text"
            id="fullName"
            name="from_name"
            placeholder='Enter your full name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='labelemail' htmlFor="email">Email:</label>
          <input
          className='full'
            type="email"
            placeholder='Enter your Email'
            id="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="eventType" >Event Type:</label>
          <select
            id="eventType"
            name="event_type"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            required
          >
            <option value="">Select Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="pre-wedding">Pre-Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="naming">Naming Ceremony</option>
            <option value="Saree">Saree Ceremony</option>
            <option value="house-warming">House Warming Ceremony</option>
            <option value="others">Other</option>
          </select>
        </div>
        {['birthday', 'pre-wedding', 'others'].includes(eventType) && (
          <div>
            <label htmlFor="shootPlace">Shoot Place:</label>
            <select
              className='shoot'
              id="shootPlace"
              name="shoot_place"
              value={shootPlace}
              onChange={(e) => setShootPlace(e.target.value)}
              required
            >
              <option value="">Select Shoot Place</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Goa">Goa</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Agra">Agra</option>
            </select>
          </div>
        )}
        <div>
          <label className='labelfull' htmlFor="fromDate">From Date:</label>
          <input
          className='from'
            type="date"
            id="fromDate"
            name="from_date"
            value={fromDate}
            min={new Date().toISOString().split('T')[0]} // Set minimum date to current date
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label  className='labelemail' htmlFor="toDate">To Date:</label>
          <input
             className='from'
            type="date"
            id="toDate"
            name="to_date"
            value={toDate}
            min={fromDate} // Set minimum date to selected fromDate value
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
             className='contact'
            type="text"
            id="contactNumber"
            name="contact_number"
            placeholder='Enter your Mobile Number'
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        {bookSuccessMessage && <p className="success-message">{bookSuccessMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className='submit' onClick={handleClick} >Submit</button>
      </form>
      {/* {
        data.map((user)=>(
          <p key={user._id}>{user.fullName}</p>
        ))
      } */}
      {/* onClick={handleClick} disabled={isSubmitting}*/}
    </div>
 </div>
  );
};

export default BookNow;