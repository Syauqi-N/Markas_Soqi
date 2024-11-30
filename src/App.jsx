import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      // Update the position of the light effect
      if (lightRef.current) {
        lightRef.current.style.left = `${x}px`;
        lightRef.current.style.top = `${y}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="linktree-container">
      <div className="light-effect" ref={lightRef}></div>
      <img className="profile-img" src="/soqi.jpg" alt="Profile" />
      <h1 className="title">Soqeey</h1>
      <div className="links">
        <a href="https://www.instagram.com/soqeey/" className="link-item">Instagram</a>
        <a href="https://www.linkedin.com/in/syauqi-naufal-641b8a28a/" className="link-item">LinkedIn</a>
      </div>
    </div>
  );
}

export default App;