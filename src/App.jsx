import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LogoHero from "./sections/LogoHero";
import CompanyIntro from "./sections/home/CompanyIntro";
import Solutions from "./sections/home/Solutions";
import Industries from "./sections/home/Industries";
import Partners from "./sections/home/Partners";
import WhySpkbs from "./sections/home/WhySpkbs";
import Training from "./sections/home/Training";
import Contact from "./sections/home/Contact";

const pages = {
  home: LogoHero,
  about: CompanyIntro,
  solutions: Solutions,
  industries: Industries,
  partners: Partners,
  why: WhySpkbs,
  training: Training,
  contact: Contact,
};

function getPageFromHash() {
  const page = window.location.hash.replace(/^#\/?/, "").split("?")[0];
  return pages[page] ? page : "home";
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);
  const Page = pages[currentPage];

  useEffect(() => {
    const handleNavigation = () => setCurrentPage(getPageFromHash());
    window.addEventListener("hashchange", handleNavigation);
    return () => window.removeEventListener("hashchange", handleNavigation);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <Navbar currentPage={currentPage} />
      <main key={currentPage}>
        <Page />
      </main>
    </>
  );
}

export default App;
