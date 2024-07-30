import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';
import Navbar from "./Navbar";
import "./PieChart.css"
import { useNavigate } from "react-router-dom";
function Piechart() {
  const [bookings, setBookings] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8001/booked");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const eventTypes = bookings.map(item => item.eventType);
  const eventTypeCounts = eventTypes.reduce((acc, eventType) => {
    acc[eventType] = (acc[eventType] || 0) + 1;
    return acc;
  }, {});

  const seriesData = Object.values(eventTypeCounts);
  const categories = Object.keys(eventTypeCounts);

  return (
    <div>
        <Navbar/>
    <React.Fragment>
       
      <div className="container-fluid mb-3">
      <button onClick={()=>{
        navigate("/bookedDetails");
      }} className="backbut">Go Back</button>
        <h3 className="mt-3">Booking Progress </h3>
        <Chart
          type="pie"
          className="piechart"
          width={1300}
          height={500}
          series={seriesData}
          options={{
            title: { text: "" },
            noData: { text: "Loading..." },
            labels: categories
          }}
        />
      </div>
    </React.Fragment>
    </div>
  );
}

export default Piechart;
