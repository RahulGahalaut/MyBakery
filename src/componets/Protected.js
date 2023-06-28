import { Outlet } from "react-router-dom";
import Footer from "./protected-components/Footer";
import Navbar from "./protected-components/Navbar";
import "./Protected.css";
const Protected = () => {
  return (
    <div className="global-container">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Protected;
