import React, { useEffect } from 'react';
import socket from './socketService';
function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    // Add more event listeners as needed
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="App">
      {/* Your React components */}
    </div>
  );
}
export default App;
