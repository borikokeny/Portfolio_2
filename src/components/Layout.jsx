import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
  <Header />
  <Outlet />
  <Footer />
    </div>
  
  );
}

export default Layout;