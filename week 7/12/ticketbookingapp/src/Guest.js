import React from 'react';

function Guest() {
  return (
    <div style={{ color: 'blue' }}>
      <h2>Welcome Guest! 👤</h2>
      <p>You can browse available flights.</p>
      <ul>
        <li>Indigo - Bhopal to Delhi - 10:00 AM</li>
        <li>Air India - Mumbai to Chennai - 1:30 PM</li>
        <li>SpiceJet - Bangalore to Kolkata - 6:00 PM</li>
      </ul>
    </div>
  );
}

export default Guest;
