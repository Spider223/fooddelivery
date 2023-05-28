import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Policy from "./pages/Policy";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} exact />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
