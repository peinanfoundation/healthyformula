import { Hero } from "../components/Hero";
import { About, FeaturedEvent, OurWork, Research } from "../components/Sections";
import { Mission } from "../components/MoreSections";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <OurWork />
      <FeaturedEvent />
      <Research />
    </>
  );
}
