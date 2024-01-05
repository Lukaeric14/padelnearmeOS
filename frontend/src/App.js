import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CRM from './components/CRM'; // Import the CRM component

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make a GET request to the backend endpoint
    axios.get('http://localhost:3001/test') // Replace with your endpoint URL
      .then(response => {
        setMessage(response.data); // Set the response data in the state
      })
      .catch(error => {
        console.error('Error connecting to backend:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <div>
      <h1>Simple CRM App</h1>
      <div>
      <h1>Check Backend Connection</h1>
      <p>{message}</p>
    </div>
      <CRM /> {/* Render the CRM component */}
    </div>
      </header>
    </div>
  );
}

export default App;
