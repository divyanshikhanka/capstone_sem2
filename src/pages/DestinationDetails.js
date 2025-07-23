import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import '../styles/explore.css';

function DestinationDetails() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dest = location.state;

  if (!dest) {
    return (
      <div className="destination-details">
        <h2>Destination "{name}" Not Found</h2>
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
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
