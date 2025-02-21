import React, { useState } from 'react';
import Login from './components/Login';
import EventList from './components/EventList';
import { setAuthToken } from './api';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token in local storage
  const token = localStorage.getItem('token');
  if (token) setAuthToken(token);

  return (
    <div>
      {isAuthenticated ? (
        <EventList />
      ) : (
        <Login setAuth={setIsAuthenticated} />
      )}
    </div>
  );
};

export default App;
