// import jimsDesktop from "../images/Jims-desktop.jpg";
// import jimsTablet from "../images/Jims-tbl.png";
// import tailwind from "../images/Tailwind.png";
// import adobe from "../images/Adobe.png";
// import vite from "../images/Vite.png";
// import react from "../images/React.png";
// import javascript from "../images/Javascript.png";
// import css from "../images/Css.png";
// import api from "../images/Api.png";
// import html from "../images/HTML.jpg";

// const Jims = () => {
//   return (
//     <section className="project-section jims container">
//       <div className="row align-items-strech">
//         <div className="col-6 d-flex flex-column justify-content-between">
//           <h1>Jim's Convenience</h1>
//           <p className="">
//             A fully functional e-commerce store with cart and checkout
//             functionality.
//           </p>
//           <h5>Project Overview</h5>
//           <p className="text-justify">
//             Jim’s Convenience is a React-based online store with a smooth
//             shopping experience, dynamic product pages, and secure checkout.
//           </p>
//           <img src={jimsDesktop} alt="desktop" className="mt-4" />
//         </div>
//         <div className="col-5">
//           <div className="image-container">
//             <img src={jimsTablet} alt="tablet" className="w-75 pb-3" />
//           </div>
//           <h5>Key Features</h5>
//           <ul className="text-start mt-3">
//             <li>
//               <strong>Homepage</strong> – Product listings with a live search
//               bar
//             </li>
//             <li>
//               <strong>Product Page</strong> – Detailed product view with images,
//               reviews, and discount prices
//             </li>
//             <li>
//               <strong>Shopping Cart</strong> – Add/remove items and view total
//               price
//             </li>
//             <li>
//               <strong>Checkout Process</strong> – Complete purchase and confirm
//               orders
//             </li>
//             <li>
//               <strong>Contact Page</strong> – Validated contact form
//             </li>
//             <li>
//               <strong>Global Layout</strong> – Consistent navigation, cart
//               indicator, and footer
//             </li>
//           </ul>
//           <button>
//             <a
//               href="https://jimsconvenience.netlify.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="link-body-emphasis mt-3"
//             >
//               Visit Project
//             </a>
//           </button>
//         </div>
//         <div className="col-1">
//           <img src={tailwind} className="w-100 mb-2 px-3" />
//           <img src={react} className="w-100 mb-3 px-4" />
//           <img src={css} className="w-100 mb-3 px-3" />
//           <img src={api} className="w-100 mb-3 px-3" />
//           <img src={adobe} className="w-100 mb-3 px-4" />
//           <img src={vite} className="w-100 mb-3 px-4" />
//           <img src={html} className="w-100 px-3 mb-3" />
//           <img src={javascript} className="w-100 mb-3 px-3" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Jims;

const Jims = () => {
  return (
    <section className="project-section jims container">
      <div className="row align-items-center">
        {/* Column for Text and Image */}
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-between">
          <h1>Jim's Convenience</h1>
          <p>A fully functional e-commerce store with cart and checkout functionality.</p>
          <h5>Project Overview</h5>
          <p>Jim’s Convenience is a React-based online store with a smooth shopping experience, dynamic product pages, and secure checkout.</p>
          <img src={jimsDesktop} alt="desktop" className="mt-4 img-fluid" />
        </div>

        {/* Column for Features and Tablet Image */}
        <div className="col-lg-5 col-md-12 d-flex flex-column align-items-center">
          <div className="image-container">
            <img src={jimsTablet} alt="tablet" className="w-75 pb-3 img-fluid" />
          </div>
          <h5>Key Features</h5>
          <ul className="text-start mt-3">
            <li><strong>Homepage</strong> – Product listings with live search</li>
            <li><strong>Product Page</strong> – Detailed product view</li>
            <li><strong>Shopping Cart</strong> – Add/remove items</li>
            <li><strong>Checkout</strong> – Complete purchase</li>
          </ul>
          <button>
            <a href="https://jimsconvenience.netlify.app/" target="_blank" rel="noopener noreferrer" className="link-body-emphasis mt-3">
              Visit Project
            </a>
          </button>
        </div>

        {/* Column for Tech Stack */}
        <div className="col-lg-1 col-md-12 d-flex flex-wrap justify-content-center mt-3">
          <img src={tailwind} className="w-25 mb-2 px-2 img-fluid" />
          <img src={react} className="w-25 mb-3 px-2 img-fluid" />
          <img src={css} className="w-25 mb-3 px-2 img-fluid" />
          <img src={api} className="w-25 mb-3 px-2 img-fluid" />
          <img src={adobe} className="w-25 mb-3 px-2 img-fluid" />
          <img src={vite} className="w-25 mb-3 px-2 img-fluid" />
          <img src={html} className="w-25 px-2 mb-3 img-fluid" />
          <img src={javascript} className="w-25 mb-3 px-2 img-fluid" />
        </div>
      </div>
    </section>
  );
};
