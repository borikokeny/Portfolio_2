import bidifyDesktop from "../images/Bidify-desktop.jpg";
import bidifyTablet from "../images/Bidify-tablet.jpg";
import bootstrap from "../images/Bootstrap.jpg";
import adobe from "../images/Adobe.png";
import vite from "../images/Vite.png";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/Html.png";

const Bidify = () => {
  return (
    <section className="project-section bidify container">
      <div className="row">
        <div className="col-5 me-3">
          <h1 className="mb-3">Bidify</h1>
          <p className="text-start mx-3">
            An online auction platform where users can buy and sell items
            through bidding.
          </p>
          <h5>Project Overview</h5>
          <p className="text-start mx-3">
            Bidify is a React-based auction platform that allows users to
            create, list, and bid on auctions. Upon registration, users receive
            1000 credits to participate in auctions. Non-registered users can
            browse listings, while registered users can fully engage in the
            auction process.
          </p>
          <img src={bidifyDesktop} alt="desktop" className="w-100" />
        </div>
        <div className="col-5">
          <div className="image-container">
            <img src={bidifyTablet} alt="desktop" className="w-75 pb-3" />
          </div>
          <h5>Key Features</h5>
          <ul className="text-start mt-3">
            <li> User authentication (register/login/logout)</li>
            <li>Profile management (update avatar, view total credits)</li>
            <li>
              Create and manage auction listings (title, images, deadline,
              description)
            </li>
            <li>Bid on listings and view bid history</li>
            <li> Search for listings</li>
          </ul>
          <a
            href="https://bidify-auction.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-body-emphasis mt-3"
          >
            Visit Project
          </a>
        </div>
        <div className="col-1">
          <img src={api} className="w-100 mb-3 px-3" />
          <img src={react} className="w-100 mb-3 px-4" />
          <img src={css} className="w-100 mb-3 px-3" />
          <img src={adobe} className="w-100 mb-3 px-4" />
          <img src={bootstrap} className="w-100 mb-3 px-3" />
          <img src={vite} className="w-100 mb-3 px-4" />
          <img src={html} className="w-100 mb-3 px-4" />
          <img src={javascript} className="w-100 mb-3 px-3" />
        </div>
      </div>
    </section>
  );
};

export default Bidify;
