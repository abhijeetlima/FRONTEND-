import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-background">
        {/* Add the URL of the background image */}
        <img src="./image/swimming-pool.jpg" alt="" />
      </div>
      <div className="home-content">
        <h1>Welcome to ABHIJIT Hotel</h1>
        <p>
          Welcome to ABHIJIT Hotel, your home away from home! Nestled in the
          heart of the bustling city, ABHIJIT Hotel offers a luxurious and
          comfortable stay for both business and leisure travelers. With our
          prime location, you'll have easy access to the city's major
          attractions, shopping centers, and entertainment venues.
        </p>
        <p>
          Our hotel boasts elegant and well-appointed rooms that are designed to
          provide the utmost comfort and relaxation. Each room is equipped with
          modern amenities, including high-speed Wi-Fi, flat-screen TVs, and
          cozy bedding, ensuring a restful night's sleep.
        </p>
        <button className="btn btn-primary">Learn More</button>
      </div>
      <footer className="hotel-details">
        <h3>Hotel Details</h3>
        <ul>
          <li>
            <strong>Address:</strong> 123 Main Street, shimla, India
          </li>
          <li>
            <strong>Phone:</strong> +91 70080-44133
          </li>
          <li>
            <strong>Email:</strong> info@abhijithotel.com
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
