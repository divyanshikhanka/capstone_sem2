import React, { useState, useEffect } from 'react';
import '../styles/explore.css';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const mockData = [
      { name: 'Paris', description: 'City of Light', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=600', budget: 'high', type: 'city', climate: 'temperate' },
      { name: 'Tokyo', description: 'Land of the Rising Sun', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=600', budget: 'high', type: 'city', climate: 'temperate' },
      { name: 'New York', description: 'The Big Apple', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=600', budget: 'high', type: 'city', climate: 'temperate' },
      { name: 'Sydney', description: 'Harbour City', image: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=600', budget: 'medium', type: 'beach', climate: 'warm' },
      { name: 'Cape Town', description: 'Mother City', image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=600', budget: 'medium', type: 'mountain', climate: 'warm' },
      { name: 'Rio de Janeiro', description: 'Marvelous City', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=600', budget: 'low', type: 'beach', climate: 'warm' },
      { name: 'Rome', description: 'The Eternal City', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=600', budget: 'medium', type: 'city', climate: 'temperate' },
      { name: 'Bangkok', description: 'City of Angels', image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=400&q=600', budget: 'low', type: 'city', climate: 'hot' },
      { name: 'London', description: 'The Old Smoke', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=600', budget: 'high', type: 'city', climate: 'cold' },
      { name: 'Dubai', description: 'City of Gold', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=600', budget: 'high', type: 'desert', climate: 'hot' },
    ];
    setDestinations(mockData);
  }, []);

  const [budget, setBudget] = useState('');
  const [type, setType] = useState('');
  const [climate, setClimate] = useState('');

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(search.toLowerCase()) &&
    (budget === '' || dest.budget === budget) &&
    (type === '' || dest.type === type) &&
    (climate === '' || dest.climate === climate)
  );

  return (
    <div className="explore">
      <h2>Explore Destinations</h2>
      <div className="explore-filters">
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={budget} onChange={e => setBudget(e.target.value)}>
          <option value="">Budget</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">Place Type</option>
          <option value="city">City</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
          <option value="desert">Desert</option>
        </select>
        <select value={climate} onChange={e => setClimate(e.target.value)}>
          <option value="">Climate</option>
          <option value="hot">Hot</option>
          <option value="warm">Warm</option>
          <option value="temperate">Temperate</option>
          <option value="cold">Cold</option>
        </select>
      </div>
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
