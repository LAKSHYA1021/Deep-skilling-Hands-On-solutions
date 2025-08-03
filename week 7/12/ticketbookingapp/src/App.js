import React, { useState } from 'react';
import Guest from './Guest';
import User from './User';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>✈️ Welcome to Ticket Booking App</h1>
      {
        isLoggedIn ? (
          <>
            <User />
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Guest />
            <button onClick={handleLogin}>Login</button>
          </>
        )
      }
    </div>
  );
}

export default App;
