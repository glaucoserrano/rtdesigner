import { AboutSection } from "./components/aboutsection";
import { DetailsSection } from "./components/detailssection/";
import { Footer } from "./components/footer";
import { Header } from "./components/header";


import './styles/globals.css';

export default function Home() {
  return (
    <>
      <Header />
      <AboutSection />
      <DetailsSection />
      <Footer />
    </>
     
  );
}
