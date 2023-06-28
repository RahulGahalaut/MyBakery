import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./componets/HomePage";
import Protected from "./componets/Protected";
import Contact from "./componets/Contact";
import About from "./componets/About";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
