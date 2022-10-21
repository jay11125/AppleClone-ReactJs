import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import TvPlusCarousel from "./components/TvPlusCarousel/TvPlusCarousel";
import { heroSectionData } from "./HeroSectionData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ marginTop: "43px" }}>
        {heroSectionData.map(({ itemName, learnUrl, orderUrl }) => (
          <HeroSection key={itemName} itemName={itemName} learnUrl={learnUrl} orderUrl={orderUrl} />
        ))}
        <Gallery />
        <TvPlusCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
