import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
