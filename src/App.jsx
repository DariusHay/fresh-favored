import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import MenuRetail from "./pages/MenuRetail";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Policies from "./pages/Policies";
import Success from "./pages/Success";

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu-retail" element={<MenuRetail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/booking/success" element={<Success />} />
      </Routes>
    </PageLayout>
  );
}
