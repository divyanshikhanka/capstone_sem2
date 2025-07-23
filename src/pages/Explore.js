import React, { useState, useEffect } from 'react';
import '../styles/explore.css';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Using OpenTripMap API or mock data
  useEffect(() => {
    // Mock data for now
    const mockData = [
      { name: 'Paris', description: 'City of Light', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=600' }, // Paris portrait
      { name: 'Tokyo', description: 'Land of the Rising Sun', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=600' }, // Tokyo portrait
      { name: 'New York', description: 'The Big Apple', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=600' }, // NY portrait
      { name: 'Sydney', description: 'Harbour City', image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=600' }, // Sydney portrait
      { name: 'Cape Town', description: 'Mother City', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=600' }, // Cape Town portrait
      { name: 'Rio de Janeiro', description: 'Marvelous City', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=600' }, // Rio portrait
      { name: 'Rome', description: 'The Eternal City', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=600' }, // Rome portrait
      { name: 'Bangkok', description: 'City of Angels', image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=600' }, // Bangkok portrait
      { name: 'London', description: 'The Old Smoke', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=600' }, // London portrait
      { name: 'Dubai', description: 'City of Gold', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=600' }, // Dubai portrait
    ];
    setDestinations(mockData);
  }, []);

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="explore">
      <h2>Explore Destinations</h2>
      <input
        type="text"
        placeholder="Search destination..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="destination-list">
        {filteredDestinations.map((dest, index) => (
          <div
            key={index}
            className="destination-card"
            onClick={() => navigate(`/explore/${encodeURIComponent(dest.name)}`, { state: dest })}
            style={{ cursor: 'pointer' }}
          >
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
