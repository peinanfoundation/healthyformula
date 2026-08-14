import { Hero } from "../components/Hero";
import { About, FeaturedEvent, OurWork, ResearchTeaser } from "../components/Sections";
import { Mission } from "../components/MoreSections";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <OurWork />
      <FeaturedEvent />
      <ResearchTeaser />
    </>
  );
}
