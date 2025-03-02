import "../css/About.css"
function About() {
    return (
      <div className="about-container">
        <h2>About This App</h2>
        <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
          <img src="/tmdb-logo.svg" alt="TMDB Logo" className="tmdb-logo" />
        </a>
      </div>
    );
  }
  
  export default About;
  