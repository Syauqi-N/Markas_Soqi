import './App.css';

function App() {
  return (
    <div className="linktree-container">
      <img
        src="/soqi.jpg"
        alt="Soqeey"
        className="profile-img"
      />
      <h1 className="title">Soqeey</h1>

      <div className="links">
        <a href="https://www.instagram.com/soqeey/" className="link-item" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/syauqi-naufal-641b8a28a/" className="link-item" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
