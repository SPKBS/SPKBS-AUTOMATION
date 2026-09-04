import Navbar from "./components/Navbar";
import LogoHero from "./sections/LogoHero";

import CompanyIntro from "./sections/home/CompanyIntro";
import Solutions from "./sections/home/Solutions";
import Industries from "./sections/home/Industries";
import Partners from "./sections/home/Partners";
import WhySpkbs from "./sections/home/WhySpkbs";
import Training from "./sections/home/Training";
import Contact from "./sections/home/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">

        {/* HERO */}
        <LogoHero />

        {/* COMPANY */}
        <CompanyIntro />

        {/* SOLUTIONS */}
        <Solutions />

        {/* INDUSTRIES */}
        <Industries />

        {/* PARTNERS */}
        <Partners />

        {/* WHY SPKBS */}
        <WhySpkbs />

        {/* TRAINING */}
        <Training />

        {/* CONTACT */}
        <Contact />

      </main>
    </>
  );
}

export default App;