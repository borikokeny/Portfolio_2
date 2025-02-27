import jimsDesktop from "../images/Jims-desktop.jpg";
import jimsTablet from "../images/Jims-tablet.jpg";

const Jims = () => {
  return (
    <section className="project-section jims bg-warning">
      <h1>Jim's Convenience</h1>
      <p>A React-based online shop with cart functionality.</p>
      <div className="image-container">
      <img src={jimsDesktop} alt="desktop" className="w-50"/>
      <img src={jimsTablet} alt="tablet" className="w-50"/>
      </div>
      <a href="https://jimsconvenience.netlify.app/" target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
    </section>
  );
};

export default Jims;