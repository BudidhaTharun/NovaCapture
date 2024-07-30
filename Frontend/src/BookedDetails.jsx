import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import "./BookDetails.css";
import { useNavigate } from "react-router-dom";



function BookDetails() {
  const [bookings, setBookings] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const navigate=useNavigate();

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(-1);
    }, 4000); // Revert back to original text after 2 seconds
  };

  useEffect(() => {
    // Fetch data from backend API when component mounts
    axios.get("http://localhost:8001/booked")
      .then(response => {
        setBookings(response.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error("Failed to fetch bookings:", error);
      });
  }, []);

  return (
    <div className="bd">
    <div>
      <Navbar/>
      <div className="progress">
     
      <h2>All Bookings </h2>
      <button onClick={()=>{
        navigate("/piechart");
      }} className="progbut">See Progress</button>
      </div>
     
    
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Event Type</th>
            <th>Shoot Place</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Contact Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => ( // Define index here
            <tr key={booking._id}>
              <td>{booking.fullName}</td>
              <td>{booking.email}</td>
              <td>{booking.eventType}</td>
              <td>{booking.shootPlace}</td>
              <td>{booking.fromDate}</td>
              <td>{booking.toDate}</td>
              <td>{booking.contactNumber}</td>
              <td>
                <button
                  onClick={() => copyToClipboard(booking.contactNumber, index)}
                  disabled={copiedIndex === index}
                  style={{
                    backgroundColor: copiedIndex === index ? "green" : "",
                    color: copiedIndex === index ? "white" : ""
                  }}
                >
                  {copiedIndex === index ? "Copied" : "Copy"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default BookDetails;
