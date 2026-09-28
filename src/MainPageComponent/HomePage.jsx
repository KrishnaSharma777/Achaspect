import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ServicesPortfolio from "./ServicesPortfolio";
import FeaturedProjects from "./FeaturedProjects";
import WhyChooseUs from "./WhyChoseUs";
import DesignProcessSection from "./DesignProcessSection";
import SEO from "../components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Architecture & Interior Design Studio in Gwalior"
        description="Archaspect is a Gwalior-based architecture and design firm creating sustainable, functional and aesthetically refined residential, commercial and institutional spaces."
        canonical="/"
      />

      <main>
        <HomeSection />
        <AboutSection />
        <WhyChooseUs />
        <ServicesPortfolio />
        <FeaturedProjects />
        <DesignProcessSection />
      </main>
    </>
  );
};

export default HomePage;
