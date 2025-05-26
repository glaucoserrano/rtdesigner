import { AboutSection } from "./components/aboutsection";
import { DetailsSection } from "./components/detailssection/";
import { Layout } from "./components/layout/layout";
import './styles/globals.css';

export default function Home() {
  return (
      <Layout>
        <AboutSection />
        <DetailsSection />
      </Layout>
  );
}
