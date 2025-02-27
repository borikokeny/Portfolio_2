import holidazeTablet from "../images/Holidaze-tablet.jpg";
import holidazeDesktop from "../images/Holidaze-desktop.jpg";
import holidazeMobile from "../images/Holidaze-mobile.jpg";

const Holidaze = () => {
  return (
    <section className="project-section holidaze bg-black">
      <h1>Holidaze</h1>
      <p>An airbnb site</p>
      <img src={holidazeTablet} alt="tablet" className="w-25" />
      <img src={holidazeDesktop} alt="tablet" className="w-25" />
      <img src={holidazeMobile} alt="tablet" className="w-25" />
      <a href="https://bidify-auction.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white">
        Visit Project
      </a>
    </section>
  );
};

export default Holidaze;