import Header from "./components/Header";
import Footer from "./components/Footer";
import { About, Contact, Home, Projects } from "./pages/index";

export default function App() {
  return (
    <>
      <Header />
      <main data-bs-spy="scroll" data-bs-target="#navbar">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// // import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "../components/Layout";
// import { About, Contact, Home, Projects } from "../pages/index";

// export default function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="Projects" element={<Projects />} />
//           <Route path="About" element={<About />} />
//           <Route path="Contact" element={<Contact />} />
//         </Route>
//       </Routes>

//       </BrowserRouter>
//       {/* <div className="card">
//         <button  className="btn btn-warning">

//         </button>
//       </div> */}
//     </>
//   );
// }
