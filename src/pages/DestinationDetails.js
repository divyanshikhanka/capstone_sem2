import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../styles/explore.css';

function DestinationDetails() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dest = location.state;

  const flights = [
    { airline: 'Air Global', from: 'Your City', to: name, price: '$450', time: '10:30 AM' },
    { airline: 'Skyways', from: 'Your City', to: name, price: '$520', time: '2:15 PM' },
    { airline: 'FlyHigh', from: 'Your City', to: name, price: '$480', time: '6:45 PM' },
  ];

  if (!dest) {
    return (
      <div className="destination-details">
        <h2>Destination Not Found</h2>
        <button onClick={() => navigate(-1)} className="get-started-btn">Go Back</button>
      </div>
    );
  }

  return (
    <div className="destination-details">
      <button onClick={() => navigate(-1)} className="get-started-btn" style={{ margin: '32px 0 0 32px' }}>← Back</button>
      <div className="destination-details-content">
        <img src={dest.image} alt={dest.name} className="destination-details-img" />
        <div className="destination-details-info">
          <h2>{dest.name}</h2>
          <p>{dest.description}</p>
          <ul className="destination-meta">
            <li><b>Budget:</b> {dest.budget?.charAt(0).toUpperCase() + dest.budget?.slice(1)}</li>
            <li><b>Type:</b> {dest.type?.charAt(0).toUpperCase() + dest.type?.slice(1)}</li>
            <li><b>Climate:</b> {dest.climate?.charAt(0).toUpperCase() + dest.climate?.slice(1)}</li>
          </ul>
        </div>
      </div>
      <div className="flights-section">
        <h3>Recent Flights</h3>
        <table className="flights-table">
          <thead>
            <tr>
              <th>Airline</th>
              <th>From</th>
              <th>To</th>
              <th>Departure</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, idx) => (
              <tr key={idx}>
                <td>{flight.airline}</td>
                <td>{flight.from}</td>
                <td>{flight.to}</td>
                <td>{flight.time}</td>
                <td>{flight.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DestinationDetails;
