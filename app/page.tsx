
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhotoGallery from "./components/PhotoGallery";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black  text-white">
      <Navbar/>
      <Hero/>
      <PhotoGallery/>
      <LocationSection/>
      <Footer/>
    </div>
  );
}
