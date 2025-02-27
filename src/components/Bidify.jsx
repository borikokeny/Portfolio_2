import bidifyDesktop from "../images/Bidify-desktop.jpg";

const Bidify = () => {
  return (
    <section className="project-section bidify">
      <h1>Bidify</h1>
      <p>A React-based online shop with cart functionality.</p>
      <img src={bidifyDesktop} alt="desktop" className="w-50"/>
            <a href="https://bidify-auction.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white">
        Visit Project
      </a>
    </section>
  );
};

export default Bidify;