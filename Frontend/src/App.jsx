import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';
import ServiceSection from './ServiceSection';
import BookNow from './BookNow';
import RegisterLogin from './RegisterLogin';
import BookedDetails from './BookedDetails';
import PieChart from './PieChart';


function App() {
  const photographer = {
    name: "nova",
    email: "nova@gmail.com",
    instagram: "novacapture",
    phoneNumber: "9999999999",
    experience: "5"
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs photographer={photographer} />} />
          <Route path="/service" element={<ServiceSection />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/register" element={<RegisterLogin />} />
          <Route path="/bookedDetails" element={<BookedDetails />} />
          <Route path="/piechart" element={<PieChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
