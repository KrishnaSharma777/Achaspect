

import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ServicesPortfolio from "./ServicesPortfolio";
import FeaturedProjects from "./FeaturedProjects";
import WhyChooseUs from "./WhyChoseUs";
import DesignProcessSection from "./DesignProcessSection";


const HomePage = () => {
  return (
    <main>
      
      <HomeSection />
      <AboutSection/>
      <WhyChooseUs/>

      <ServicesPortfolio />
      <FeaturedProjects />
      <DesignProcessSection/>

    </main>
  );
};

export default HomePage;
