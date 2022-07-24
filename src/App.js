import ClienySlider from "./components/ClienySlider";
import Companies from "./components/Companies";
import CTASection from "./components/CTASection";
import FainancyAccount from "./components/FainancyAccount";
import FeatureCart from "./components/FeatureCart";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FooterCTA from "./components/FooterCTA";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RegisterCTA from "./components/RegisterCTA";
import WhyChoseUs from "./components/WhyChoseUs";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Companies />
      <Features />
      <RegisterCTA />
      <FeatureCart />
      <ClienySlider />
      <CTASection />
      <FainancyAccount />
      <WhyChoseUs />
      <FooterCTA />
      <Footer />
    </div>
  );
}

export default App;
