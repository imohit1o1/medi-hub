import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using React 18 or above
import App from './App.jsx'; // Import your main App component
import "./index.css"; // Import your CSS file

// Create a root and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
