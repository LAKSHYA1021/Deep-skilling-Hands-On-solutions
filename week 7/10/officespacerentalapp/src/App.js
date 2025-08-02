import React from 'react';
import './App.css';

const App = () => {
  const officeSpaces = [
    {
      name: 'Tech Park View',
      rent: 55000,
      address: 'MG Road, Bangalore',
      image: 'https://via.placeholder.com/300x200?text=Office+1'
    },
    {
      name: 'Green Workspace',
      rent: 65000,
      address: 'Sector 62, Noida',
      image: 'https://via.placeholder.com/300x200?text=Office+2'
    },
    {
      name: 'City Central',
      rent: 70000,
      address: 'Connaught Place, Delhi',
      image: 'https://via.placeholder.com/300x200?text=Office+3'
    },
    {
      name: 'Budget Office',
      rent: 40000,
      address: 'Kukatpally, Hyderabad',
      image: 'https://via.placeholder.com/300x200?text=Office+4'
    }
  ];

  return (
    <div className="app-container">
      <h1>Office Space Rental Listings</h1>

      {officeSpaces.map((office, index) => (
        <div className="office-card" key={index}>
          <img src={office.image} alt={office.name} className="office-image" />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{' '}
            <span style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
              ₹{office.rent.toLocaleString()}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
