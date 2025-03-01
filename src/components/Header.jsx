import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed-top shadow-sm">
      <nav className="container navbar navbar-expand-md navbar-light bg-white">
        {/* Hamburger button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link mx-3" onClick={closeNavbar}>Home</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link mx-3" onClick={closeNavbar}>Projects</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link mx-3" onClick={closeNavbar}>About me</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link mx-3" onClick={closeNavbar}>Contact me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


// import React from "react";

// export default function Header() {
//   return (
//     <header className="fixed-top shadow-sm">
//       <nav className="container navbar navbar-expand-md navbar-light bg-white">
//         {/* Hamburger button */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation links */}
//         <div className="collapse navbar-collapse justify-content-end me-3" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a href="#home" className="nav-link mx-3">Home</a>
//             </li>
//             <li className="nav-item">
//               <a href="#projects" className="nav-link mx-3">Projects</a>
//             </li>
//             <li className="nav-item">
//               <a href="#about" className="nav-link  mx-3">About me</a>
//             </li>
//             <li className="nav-item">
//               <a href="#contact" className="nav-link  mx-3">Contact me</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }



// import React from "react";
// import { Link } from "react-router";

// export default function Header() {
//   return (
//     <header className="fixed-top shadow-sm">
//       <nav className="container d-flex navbar navbar-expand-md justify-content-between">
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse justify-content-end me-3">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <a href="#home" className="list-group-item nav-a mx-3">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#projects" className="list-group-item nav-a mx-3">
//               Projects
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#about" className="list-group-item nav-a mx-3">
//               About me
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#contact" className="list-group-item nav-a mx-3">
//               Contact me
//             </a>
//           </li>
//         </ul>
//       </div>
//       </nav>
      
//     </header>
//   );
// }


// import React from "react";
// import { Link } from "react-router";

// export default function Header() {
//   return (
//     <header className="fixed-top shadow-sm">
//       <nav className="navbar navbar-expand-md">
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse justify-content-end me-3">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to="/" className="list-group-item nav-link">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="Portfolio" className="list-group-item nav-link">
//               Portfolio
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="About" className="list-group-item nav-link">
//               About me
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="Contact" className="list-group-item nav-link ">
//               Contact me
//             </Link>
//           </li>
//         </ul>
//       </div>
//       </nav>
      
//     </header>
//   );
// }
