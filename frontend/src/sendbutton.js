import React, { useState } from 'react';

function SendButton() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    // Validate message here (optional)

    // Send data (replace with your actual sending logic)
    console.log('Sending message:', message);
    setMessage(''); // Clear message after sending
  };

  return (
    <button type="button" onClick={handleClick}>Send</button>
  );
}

export default SendButton;
