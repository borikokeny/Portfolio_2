import holidazeTablet from "../images/Holidaze-tablet.jpg";
import holidazeDesktop from "../images/Holidaze-desktop.jpg";
import holidazeMobile from "../images/Group 62.jpg";
import tailwind from "../images/Tailwind.png";
import adobe from "../images/Adobe.png";
import vite from "../images/Vite.png";
import react from "../images/React.png";
import javascript from "../images/Javascript.png";
import css from "../images/Css.png";
import api from "../images/Api.png";
import html from "../images/HTML.jpg";

const Holidaze = () => {
  return (
    <section className="grid-container">
      <div className="a mt-4">
        <div>
          <h1>Holidaze</h1>
          <p>A modern booking platform for holiday rentals.</p>
          <p>
            <strong>Customers</strong>– Search, view, and book accommodations.
          </p>
          <p>
            <strong>Venue Managers</strong>– Register, manage listings, and
            handle bookings.
          </p>
          <button><a
            href="https://bidify-auction.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-body-emphasis mt-3"
          >
            Visit Project
          </a></button> 
        </div>
        <div>
          <h3>Key Features</h3>
          <h5>Customer Features</h5>
          <p>Browse and search for venues</p>
          <p>View venue details and availability</p>
          <p>Register and book accommodations</p>
          <p>Manage upcoming bookings</p>
          </div>
          <div>
          <h5>Venue Manager Features</h5>
          <p>Register and manage venues</p>
          <p>Update and delete venues</p>
          <p>View bookings for owned venues</p>
          <h5>User Authentication</h5>
          <p>Register/login/logout</p>
          <p> Update user avatar</p>
        </div>
      </div>
      <div className="b">
        <img src={holidazeMobile} alt="tablet" className="w-25" />
        <img src={holidazeTablet} alt="tablet" className="w-25 mb-5" />
        <img src={holidazeDesktop} alt="tablet" className="w-50" />
      </div>
      <div className="c">
        <img src={tailwind} className="w-100 px-3" />
        <img src={react} className="w-100 px-4" />
        <img src={css} className="w-100 px-3" />
        <img src={api} className="w-100 px-3" />
        <img src={adobe} className="w-100 px-4" />
        <img src={vite} className="w-100 px-4" />
        <img src={html} className="w-100 mb-3" />
        <img src={javascript} className="w-100 px-3" />
      </div>
    </section>
  );
};

export default Holidaze;
